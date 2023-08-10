import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, KeyValue} from '@angular/common';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
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
    channelTestP: any = {};
    channelTestV: any = {};
    channels = [
        0,
        1,
        2,
        3];
    bitratesP = [
        {bitrate: 0, ext: '.m4a'},
        {bitrate: 1, ext: '.m4a'},
        {bitrate: 2, ext: '.m4a'},
        {bitrate: 3, ext: '.m4a'},
        {bitrate: 4, ext: '.flac'},
        {bitrate: 5, ext: '.mp3'},
        {bitrate: 10, ext: '.mp3'},
        {bitrate: 11, ext: '.m4a'}
    ];

    bitratesV = [
        {bitrate: 4, path: 'flac', ext: '.flac'},
    ];


    destroyed = false;
    busy = false;


    constructor(private http: HttpClient) {

        this.channels.forEach( (channel) => {

            this.channelTestP[channel] = {chan: channel,  bitrates: {} };

            this.bitratesP.forEach( (bitrate) => {
                const bitrateclass = {label: bitrate.bitrate, tested: 0, errors: [], fileCount: 0, errorCount: 0 };
                this.channelTestP[channel].bitrates[bitrate.bitrate] = bitrateclass;

            });

            this.channelTestV[channel] = {chan: channel,  bitrates: {} };

            this.bitratesV.forEach( (bitrate) => {
                const bitrateclass = {label: bitrate.path, tested: 0, errors: [], fileCount: 0, errorCount: 0 };
                this.channelTestV[channel].bitrates[bitrate.bitrate] = bitrateclass;

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
                const countP =  data['data'].activeIds[channel].P.length;
                this.bitratesP.forEach( bitrate => {
                    //console.log('channeltest loop', this.channelTest[channel].bitrates[Number(bitrate)].fileCount);
                    this.channelTestP[channel].bitrates[Number(bitrate.bitrate)].fileCount = countP;
                });

                const countV =  data['data'].activeIds[channel].V.length;
                this.bitratesV.forEach( bitrate => {
                    //console.log('channeltest loop', this.channelTest[channel].bitrates[Number(bitrate)].fileCount);
                    this.channelTestV[channel].bitrates[Number(bitrate.bitrate)].fileCount = countV;
                });

            });


            let timeout = 0;
            this.channels.forEach( (channel) => {
                this.bitratesP.forEach( bitrate => {
                    window.setTimeout(() => {
                        if (!this.destroyed) {
                            //this.testPromos(channel, bitrate, data['data'].activeIds);
                            //this.testVoice(channel, bitrate, data['data'].activeIds);
                        }
                    }, timeout);
                    timeout += 5000;
                });

                this.bitratesV.forEach( bitrate => {
                    window.setTimeout(() => {
                        if (!this.destroyed) {
                            this.testVoice(channel, bitrate, data['data'].activeIds);
                            //this.testVoice(channel, bitrate, data['data'].activeIds);
                        }
                    }, 0);
                    timeout += 5000;
                });

            });



        });
    }

    private testPromos(channel, bitrate, activeIds) {


        activeIds[channel].P.forEach( id => {
            //console.log ('id', id);
            // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
            const remoteUrl = this.testServer + '/blocks/chan/' + channel + '/' + bitrate.bitrate + '/' + id + bitrate.ext;
            this.testFileP(channel, bitrate.bitrate, remoteUrl);
        });


    }

    private testVoice(channel, bitrate, activeIds) {


        activeIds[channel].V.forEach( id => {
            //console.log ('id', id);
            // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
            const remoteUrl = this.testServer + '/audio/vt/' + channel + '/' + bitrate.path + '/' + id + bitrate.ext;
            this.testFileV(channel, bitrate.bitrate, remoteUrl);
        });


    }


    private testFileP(chan, bitrate, url) {


        // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
        const qp = {'ngsw-bypass': 1};
        this.http.head(url, {params: qp}).pipe(retry(3), finalize(() => {
            // this.channelTest[chan].bitrates[bitrate].tested++;
        })).subscribe({

            next: data => {
                // console.log('success');
                this.channelTestP[chan].bitrates[bitrate].tested++;
            },
            error: error => {
                if (error.status === 404) {
                    // console.log('ERROR: ' + error.status);
                    this.channelTestP[chan].bitrates[bitrate].errorCount++;
                    this.channelTestP[chan].bitrates[bitrate].errors.push(url);
                }

            },

        });

    }

    private testFileV(chan, bitrate, url) {


        // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
        const qp = {'ngsw-bypass': 1};
        this.http.head(url, {params: qp}).pipe(retry(3), finalize(() => {
            // this.channelTest[chan].bitrates[bitrate].tested++;
        })).subscribe({

            next: data => {
                // console.log('success');
                this.channelTestV[chan].bitrates[bitrate].tested++;
            },
            error: error => {
                console.log('ERROR: ',  error);
                if (error instanceof HttpErrorResponse){
                    if (error.status === 404) {
                        console.log('ERROR: ' + error.status);
                        this.channelTestV[chan].bitrates[bitrate].errorCount++;
                        this.channelTestV[chan].bitrates[bitrate].errors.push(url);
                    }
                }
                console.log('e404', this.channelTestV)
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

