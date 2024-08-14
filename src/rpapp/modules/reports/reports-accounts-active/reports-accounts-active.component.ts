import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-accounts-active',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-accounts-active.component.html',
  styleUrls: ['./reports-accounts-active.component.scss']
})
export class ReportsAccountsActiveComponent {

    pageData:any = false

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'reports/accounts/simple', {withCredentials:true }).subscribe( (data) =>{
            console.log('loaddata', data);
            this.pageData = data;
        })

    }

}
