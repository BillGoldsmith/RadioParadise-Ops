import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-accounts-recent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-accounts-recent.component.html',
  styleUrls: ['./reports-accounts-recent.component.scss']
})
export class ReportsAccountsRecentComponent {

    pageData:any = false

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'reports/accounts/recent-emails-report', {withCredentials:true }).subscribe( (data) =>{
            console.log('loaddata', data);
            this.pageData = data;
        })

    }

}
