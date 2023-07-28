import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, KeyValue} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../zenvironments/environment";
import {finalize, retry} from "rxjs";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-playlists-test-cache-history',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './playlists-test-cache-history.component.html',
  styleUrls: ['./playlists-test-cache-history.component.scss']
})
export class PlaylistsTestCacheHistoryComponent  implements OnInit , OnDestroy{

    testServer = 'https://audio-0.radioparadise.com';
    channelTest: any = {};
    channels = [0, 1, 2, 3];
    bitrates = [0, 1, 2, 3, 4, 5, 10, 11];
    //channels = [0, 1];
    //bitrates = [0, 1];


    busy = false;
    destroyed = false;
    workload: any = {};



    constructor(private http: HttpClient) {

        this.channels.forEach( (channel) => {

            this.channelTest[channel] = {chan: channel,  bitrates: {} };

            this.bitrates.forEach( (bitrate) => {

                const bitrateclass = {label: bitrate, tested: 0, errors: [], errorCount: 0, endEvent: 0, startEvent: 0, fileCount: 0 };
                this.channelTest[channel].bitrates[bitrate] = bitrateclass;

            });
        });




    }

    ngOnDestroy(): void {
        this.destroyed = true;
    }



    ngOnInit(): void {

        this.workload = new Map();

        this.channels.forEach( (channel) => {
            this.bitrates.forEach( (bitrate) => {
                this.workload.set( channel + '-' + bitrate , {bitrate: bitrate, chan: channel, completed: false} );
            });
        });



    }

    clickRunTests(){
        this.runTests();
    }


    private runTests(){
        //console.log ('busy', this.busy);
        let task: any = false;
        if (!this.busy) {
            this.workload.forEach((value) => {
                if (!value.completed && task === false) {
                    task = value;
                }
            });

            if (task) {

                this.busy = true;
                this.getTestData(task.chan, task.bitrate);

            }
        }

        window.setTimeout(() => {
            if (!this.destroyed){
                this.runTests();
            }
        }, 1000);



    }


    private  getTestData(chan, bitrate) {

        const testData = {blocks: [], startEvent: 0, endEvent: 0, chan: chan, bitrate: bitrate};
        this.getBlocks(testData);

    }

    private getBlocks(testData){

        const qp = {chan: testData.chan, max: testData.endEvent, numSongs: 100, info: 'true', bitrate: testData.bitrate, 'ngsw-bypass': 1};



        this.http.get(environment.RPSERVER_API + 'cache', {params: qp, responseType: 'json', withCredentials: false}).subscribe(data => {

            if (testData.startEvent === 0){
                testData.startEvent = data['start_event'];
                testData.endEvent = data['end_event'];
                testData.blocks.push( ...this.cleanUpArrays(data));
                this.getBlocks(testData);
                //this.testBlocks(testData);
            }else{

                //console.log('CALLX: ', testData.chan, testData.bitrate, testData.endEvent);
                if (data['end_event'] > testData.endEvent){

                    testData.endEvent = data['end_event'];
                    testData.blocks.push( ...this.cleanUpArrays(data));
                    this.getBlocks(testData);
                }else{

                    // finished
                    //console.log('Done: ', testData.chan, testData.bitrate, testData.endEvent);
                    this.testBlocks(testData);
                }

            }

        });

    }


    private testBlocks(testData) {

        // console.log("TestDATa ", testData);

        this.channelTest[testData.chan].bitrates[testData.bitrate].startEvent = testData.startEvent;
        this.channelTest[testData.chan].bitrates[testData.bitrate].endEvent = testData.endEvent;
        this.channelTest[testData.chan].bitrates[testData.bitrate].fileCount = this.countFiles(testData);

        for (const block of testData.blocks ) {
            //console.log ('Test Blocks', testData, block);
            this.testBlock(testData.chan, testData.bitrate, block);
        }




    }

    private testBlock(chan, bitrate, block) {

        const url = new URL(block.url);
        //console.log ('URL', url);
        const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);

        if (block.type === 'P') {
            this.testFile(chan, bitrate, this.testServer + url.pathname );
        } else {


            block.songs.forEach( (song) => {

                const testUrl = this.testServer + path + song.event + '-' + block.lastEvent + '.' + block.ext;
                //console.log (testUrl);
                this.testFile(chan, bitrate, testUrl);

            });

        }

    }



    private testFile(chan, bitrate, url) {


        // url = 'https://audio-0.radioparadise.com/blocks/chan/0/0/500851199.m4a';
        const qp = {'ngsw-bypass': 1};
        this.http.head(url, {params: qp}).pipe(retry(3), finalize(() => {
            this.channelTest[chan].bitrates[bitrate].tested++;
            //console.log('count',  this.channelTest[chan].bitrates[bitrate].tested,  this.channelTest[chan].bitrates[bitrate]);
            if (this.channelTest[chan].bitrates[bitrate].tested === this.channelTest[chan].bitrates[bitrate].fileCount) {
                this.workload.set(chan + '-' + bitrate , {bitrate: bitrate, chan: chan, completed: true} );
                this.busy = false;
            }
        })).subscribe({

            next: data => {
                //console.log('success');
                //this.channelTest[chan].bitrates[bitrate].tested++;
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


    private countFiles(testData) {
        let files = 0;
        for (const block of testData.blocks) {
            // console.log(block);
            for (const song of block.songs) {
                files++;
            }
        }
        return files;
    }


    private cleanUpArrays(data){

        const blockArray = [];

        let blockIndex = 0;

        while ( data.block.hasOwnProperty(blockIndex) ){

            const songArray = [];
            let songIndex = 0;
            let lastEvent = 0;
            while (data.block[blockIndex].song.hasOwnProperty(songIndex)){

                const song = data.block[blockIndex].song[songIndex];
                const songData = { event: song.event };
                lastEvent = song.event;
                songArray.push(songData);
                songIndex++;
            }
            const block = {songs: songArray, ext: data.ext, url: data.block[blockIndex].url, type: data.block[blockIndex].type, lastEvent: lastEvent };
            blockArray.push(block);
            blockIndex++;

        }

        //console.log('blockArray');
        return blockArray;


    }

    // pipe sorter
    valueOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return a.value.toString().localeCompare(b.value);
    }

}
