import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, KeyValue} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../zenvironments/environment";
import {finalize, retry} from "rxjs";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-playlists-test-live',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './playlists-test-live.component.html',
  styleUrls: ['./playlists-test-live.component.scss']
})
export class PlaylistsTestLiveComponent implements OnInit, OnDestroy {

    testServer = 'https://audio-0.radioparadise.com';
    channelTest: any = {};
    channels = [0, 1, 2, 3];
    bitrates = [0, 1, 2, 3, 4, 5, 10, 11, 20];

    numSongs = 180;
    mqaNumSongs = 23;

    busy = false;
    destroyed = false;

    constructor(private http: HttpClient) {

        this.channels.forEach( (channel) => {

            this.channelTest[channel] = {chan: channel,  bitrates: {} };

            this.bitrates.forEach( (bitrate) => {

                const bitrateclass = {label: bitrate, tested: 0, errors: [], endEvent: 0, startEvent: 0, fileCount: 0, errorCount: 0 };
                this.channelTest[channel].bitrates[bitrate] = bitrateclass;

            });
        });




    }

    ngOnInit(): void {





    }


    clickRunTests(){
        if (this.busy){
            return;
        }
        this.busy = true;
        let timeout = 0;
        this.channels.forEach( (chan) => {

            window.setTimeout(() => {
                if (!this.destroyed) {
                    this.getCurrentEvent(chan);
                }
            }, timeout);

            timeout += 10000;

        });
    }


    private getCurrentEvent(chan) {

        const qp = {event: 0, chan: chan, 'ngsw-bypass': 1};
        this.http.get(environment.RPSERVER_API + 'play', {params: qp, responseType: 'json', withCredentials: false}).subscribe(data => {
            this.getPlaylist(chan, data['event'] - 5 );

        });


    }

    private getPlaylist(chan, event) {

        this.bitrates.forEach((bitrate) => {

            let numSongs = this.numSongs;
            if (bitrate === 20){
                numSongs = this.mqaNumSongs;
            }

            const qp = {chan: chan, max: event, numSongs: numSongs, info: 'true', bitrate: bitrate, 'ngsw-bypass': 1};
            this.http.get(environment.RPSERVER_API + 'cache', {params: qp, responseType: 'json', withCredentials: false}).subscribe(data => {

                //console.log(data['block']);

                const fileCount = this.countFiles(data);
                this.channelTest[chan].bitrates[bitrate].startEvent = data['start_event'];
                this.channelTest[chan].bitrates[bitrate].endEvent = data['end_event'];
                this.channelTest[chan].bitrates[bitrate].fileCount = fileCount;


                for (const block of Object.values(data['block'])) {
                    //console.log(block);
                    this.testBlock(chan, bitrate, block, data);
                }


            });

        });
    }

    private testBlock(chan, bitrate, block, data) {

        const url = new URL(block['url']);
        //console.log ('URL', url);
        const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);

        if (block['type'] === 'P') {


            this.testFile(chan, bitrate, this.testServer + url.pathname );

        } else {


            let lastEvent = '0';

            const songArray = [];
            let index = 0;
            while ( block.song.hasOwnProperty(index) ){
                songArray.push(block.song[index].event);
                lastEvent = block.song[index].event;
                index++;
            }



            songArray.forEach( (eventId) => {

                const testUrl = this.testServer + path + eventId + '-' + lastEvent + '.' + data.ext;
                //console.log (testUrl);
                this.testFile(chan, bitrate, testUrl);

            });






        }



    }

    private testFile(chan, bitrate, url) {


        // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
        const qp = {'ngsw-bypass': 1};
        this.http.head(url, {params: qp}).pipe(retry(3), finalize(() => {
            //this.channelTest[chan].bitrates[bitrate].tested++;
        })).subscribe({

            next: data => {
                //console.log('success');
                this.channelTest[chan].bitrates[bitrate].tested++;
            },
            error: error => {
                if (error.status === 404) {
                    //console.log('ERROR: ' + error.status);
                    this.channelTest[chan].bitrates[bitrate].errorCount++;
                    this.channelTest[chan].bitrates[bitrate].errors.push(url);
                }

            },

        });

    }


    private countFiles(data) {
        let files = 0;
        for (const block of Object.values(data['block'])) {
            //console.log(block);
            for (const song of Object.values(block['song'])) {
                files++;
            }
        }
        return files;
    }


    // pipe sorter
    valueOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return a.value.toString().localeCompare(b.value);
    }

    ngOnDestroy() {
        this.destroyed = true;
    }
}


