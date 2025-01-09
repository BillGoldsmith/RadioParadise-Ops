import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-channel-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channel-status.component.html',
  styleUrls: ['./channel-status.component.scss']
})
export class ChannelStatusComponent implements OnInit{


    pageData:any = false



    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'status/channels', {withCredentials:true }).subscribe( (data) =>{

            console.log('loaddata', data);
            this.pageData = data;
        })

    }







}
