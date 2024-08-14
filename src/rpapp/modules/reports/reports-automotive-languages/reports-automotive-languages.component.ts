import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-automotive-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-automotive-languages.component.html',
  styleUrls: ['./reports-automotive-languages.component.scss']
})
export class ReportsAutomotiveLanguagesComponent {

    pageData:any = false

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'reports/automotive/languages-report', {withCredentials:true }).subscribe( (data) =>{
            console.log('loaddata', data);
            this.pageData = data;
        })

    }

}
