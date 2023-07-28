import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {finalize, retry} from "rxjs";
import {environment} from "../../../../zenvironments/environment";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-test-cover-art',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './test-cover-art.component.html',
  styleUrls: ['./test-cover-art.component.scss']
})
export class TestCoverArtComponent implements OnInit, OnDestroy {

    s3url = 'http://graphics.radioparadise.com.s3-website-us-west-2.amazonaws.com/covers/';
    //s3url = 'https://graphics.radioparadise.com.s3.amazonaws.com/covers/';

    errors = new Map<number, any>();

    testedCount = 0;

    inflight = 0;

    albums = [];

    busy = false;
    destroyed = false;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {




    }

    clickRunTests(){
        if (this.busy){
            return;
        }
        this.busy = true;

        const qp = {file: 'admin::lists::album-cover', 'ngsw-bypass': 1};
        this.http.get(environment.RPSERVER_SITEAPI, {params: qp, responseType: 'json', withCredentials: true}).subscribe((data: any) => {

            this.albums = data.data.albums;
            this.doWork();

        });

    }

    doWork(){

        //console.log("WHATUP", this.albums  );

        setTimeout( () => {

            if (this.albums.length < 1){
                return;
            }

            if (this.inflight < 10){
                this.testAlbum(this.albums.pop());
            }

            if (!this.destroyed) {
                this.doWork();
            }

        }, 1);

    }


    private testAlbum(album){
        if (!album.asin){
            return;
        }

        if (album.asin.trim() === 'null'){
            return;
        }
        if (album.asin.trim() === ''){
            return;
        }
        if (album.asin === '0'){
            return;
        }


        let s3file = this.s3url + 's/' + album.asin + '.jpg';
        this.testFile(album, 's', s3file);

        s3file = this.s3url + 'm/' + album.asin + '.jpg';
        this.testFile(album, 'm', s3file);

        s3file = this.s3url + 'l/' + album.asin + '.jpg';
        this.testFile(album, 'l', s3file);

    }


    private testFile(album, subdir, s3file) {

        this.inflight++;

        const qp = {'ngsw-bypass': 1};
        this.http.head(s3file, {params: qp}).pipe(retry(3), finalize(() => {
            this.testedCount++;
            this.inflight--;
        })).subscribe({

            next: data => {

            },
            error: error => {
                if (error.status === 404) {
                    this.logError(album.album_id, album.asin, subdir, album.mbid_release_group);
                }
            },

        });



    }


    logError(album_id, asin, subdir, mbid_release_group){

        if (!this.errors.has(album_id)){
            this.errors.set( album_id, {album_id: album_id, asin: asin, mbid_release_group: mbid_release_group, s: false, m: false, l: false} );
        }

        const error = this.errors.get(album_id);
        error[subdir] = true;

    }

    ngOnDestroy(): void {
        this.destroyed = true;
    }

}
