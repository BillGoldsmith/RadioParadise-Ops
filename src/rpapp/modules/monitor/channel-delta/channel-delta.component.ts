import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-channel-delta',
  standalone: true,
    imports: [CommonModule, MatChipsModule, MatButtonModule],
  templateUrl: './channel-delta.component.html',
  styleUrls: ['./channel-delta.component.scss']
})
export class ChannelDeltaComponent implements OnInit {


    chans:any = false

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }


    loadData(){

        this.http.get( "https://api.radioparadise.com/api/list_chan", {withCredentials:true, responseType: 'json' }).subscribe( (data) =>{
            //console.log('loaddata', data);
            this.chans = [];
            Object.keys(data).forEach(key => {
                console.log(`${key}: ${data[key]}`);
                if (data[key].downloadable && data[key].chan != 99) {
                    this.chans.push(data[key]);
                }
            });

        })

    }


    loacChan(channel, server){
        channel.busy = true;
        this.http.get( "https://"+server+".radioparadise.com/channel_timing_check.php?chan=" + channel.chan, {withCredentials:true, responseType: 'json' }).subscribe( (data) =>{
            //console.log(data);
            channel.blocks = data;
            channel.busy = false;
        })

    }


    displayJson(obj) {
        console.log(obj);
        let something = window.open("data:application/json," + encodeURIComponent(obj),
            "_rpjson");
        something.focus();

    }
}
