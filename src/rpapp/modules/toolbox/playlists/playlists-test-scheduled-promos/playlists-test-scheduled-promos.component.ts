import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, KeyValue} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../zenvironments/environment";
import {finalize, retry} from "rxjs";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-playlists-test-scheduled-promos',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './playlists-test-scheduled-promos.component.html',
  styleUrls: ['./playlists-test-scheduled-promos.component.scss']
})
export class PlaylistsTestScheduledPromosComponent implements OnInit, OnDestroy {



    testServer = 'https://audio-0.radioparadise.com';
    channelTest: any = {};
    channels = [
        0,
        1,
        2,
        3];
    bitrates = [
        {bitrate: 0, ext: '.m4a'},
        {bitrate: 1, ext: '.m4a'},
        {bitrate: 2, ext: '.m4a'},
        {bitrate: 3, ext: '.m4a'},
        {bitrate: 4, ext: '.flac'},
        {bitrate: 5, ext: '.mp3'},
        {bitrate: 10, ext: '.mp3'},
        {bitrate: 11, ext: '.m4a'}
    ];


    destroyed = false;
    busy = false;


    constructor(private http: HttpClient) {

        this.channels.forEach( (channel) => {

            this.channelTest[channel] = {chan: channel,  bitrates: {} };

            this.bitrates.forEach( (bitrate) => {

                const bitrateclass = {label: bitrate.bitrate, tested: 0, errors: [], fileCount: 0, errorCount: 0 };
                this.channelTest[channel].bitrates[bitrate.bitrate] = bitrateclass;

            });
        });




    }

    ngOnInit(): void {

        //console.log('channeltest', this.channelTest);



        //console.log ('tests', this.channelTest);

    }

    clickRunTests(){

        if (this.busy){
            return;
        }
        this.busy = true;


        this.http.get(environment.RPSERVER_API + 'audio_active_promos', {withCredentials: true, responseType: 'json'}).subscribe( data => {
            //console.log('Data', data);

            this.channels.forEach( channel => {
                const count = data['data'].activeIds[channel].length;
                this.bitrates.forEach( bitrate => {
                    //console.log('channeltest loop', this.channelTest[channel].bitrates[Number(bitrate)].fileCount);
                    this.channelTest[channel].bitrates[Number(bitrate.bitrate)].fileCount = count;

                });


            });

            let timeout = 0;
            this.channels.forEach( (channel) => {
                this.bitrates.forEach( bitrate => {
                    window.setTimeout(() => {
                        if (!this.destroyed) {
                            this.testPromos(channel, bitrate, data['data'].activeIds);
                        }
                    }, timeout);
                    timeout += 5000;
                });
            });





        });
    }

    private testPromos(channel, bitrate, activeIds) {


        activeIds[channel].forEach( id => {
            //console.log ('id', id);
            // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
            const remoteUrl = this.testServer + '/blocks/chan/' + channel + '/' + bitrate.bitrate + '/' + id + bitrate.ext;
            this.testFile(channel, bitrate.bitrate, remoteUrl);
        });


    }

    private testFile(chan, bitrate, url) {


        // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
        const qp = {'ngsw-bypass': 1};
        this.http.head(url, {params: qp}).pipe(retry(3), finalize(() => {
            // this.channelTest[chan].bitrates[bitrate].tested++;
        })).subscribe({

            next: data => {
                // console.log('success');
                this.channelTest[chan].bitrates[bitrate].tested++;
            },
            error: error => {
                if (error.status === 404) {
                    // console.log('ERROR: ' + error.status);
                    this.channelTest[chan].bitrates[bitrate].errorCount++;
                    this.channelTest[chan].bitrates[bitrate].errors.push(url);
                }

            },

        });

    }



    // pipe sorter
    valueOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return a.value.toString().localeCompare(b.value);
    }

    ngOnDestroy() {
        this.destroyed = true;
    }

}

