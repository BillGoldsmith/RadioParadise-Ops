import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-songs-new-releases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-songs-new-releases.component.html',
  styleUrls: ['./reports-songs-new-releases.component.scss']
})
export class ReportsSongsNewReleasesComponent {
    pageData:any = false

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'reports/songs/by_release_date', {withCredentials:true }).subscribe( (data) =>{
            console.log('loaddata', data);
            this.pageData = data;
        })

    }
}
