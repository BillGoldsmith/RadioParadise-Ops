import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-channels-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-channels-clients.component.html',
  styleUrls: ['./reports-channels-clients.component.scss']
})
export class ReportsChannelsClientsComponent implements OnInit{
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
