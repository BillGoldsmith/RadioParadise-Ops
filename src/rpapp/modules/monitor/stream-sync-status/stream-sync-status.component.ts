import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-stream-sync-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stream-sync-status.component.html',
  styleUrls: ['./stream-sync-status.component.scss']
})
export class StreamSyncStatusComponent implements OnInit{

    pageData:any = false

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_API + 'stream_sync_status', {withCredentials:true, responseType: 'text' }).subscribe( (data) =>{
            console.log('loaddata', data);
            this.pageData = data;
        })

    }



}
