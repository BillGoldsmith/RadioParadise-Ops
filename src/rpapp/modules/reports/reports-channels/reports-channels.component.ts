import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-channels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-channels.component.html',
  styleUrls: ['./reports-channels.component.scss']
})
export class ReportsChannelsComponent implements OnInit{
    pageData:any = false

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'reports/channels/simple', {withCredentials:true }).subscribe( (data) =>{
            console.log('loaddata', data);
            this.pageData = data;
        })

    }
}
