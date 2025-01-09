import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-channel-streams',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './channel-streams.component.html',
  styleUrls: ['./channel-streams.component.scss']
})
export class ChannelStreamsComponent implements OnInit{


    pageData:any = false



    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'status/streams', {withCredentials:true }).subscribe( (data) =>{

            console.log('loaddata', data);


            this.pageData = data;
        })

    }


    clickSync(serverId, encoder){

        let url = 'https://' + serverId + '.radioparadise.com:7006/sync/' + encoder.encoderName;
        this.http.get( url, {withCredentials:true }).subscribe( (data) =>{
            console.log('sync', url, data);
        })
    }

    clickRestart(serverId,encoder) {

        let url = 'https://' + serverId + '.radioparadise.com:7006/restart/' + encoder.encoderName;
        this.http.get( url, {withCredentials:true }).subscribe( (data) =>{
            console.log('sync', url, data);
        })

    }

    clickSkip(serverId,encoder) {

        let url = 'https://' + serverId + '.radioparadise.com:7006/skip/' + encoder.encoderName;
        this.http.get( url, {withCredentials:true }).subscribe( (data) =>{
            console.log('sync', url, data);
        })

    }




}
