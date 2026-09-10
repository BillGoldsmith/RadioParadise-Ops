import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-channel-playlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channel-playlist.component.html',
  styleUrls: ['./channel-playlist.component.scss']
})
export class ChannelPlaylistComponent implements OnInit{


    pageData:any = false



    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get(  environment.RPSERVER_OPI+ 'status/service/playlist-anomalies', {withCredentials:true }).subscribe( (body: any) =>{
            console.log('loaddata', body);
            this.pageData = body.data;
        })

    }


    protected readonly Math = Math;
}
