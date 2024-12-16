import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";
import {StatusTagComponent} from "../../../components/misc/status-tag/status-tag.component";

@Component({
  selector: 'app-service-health',
  standalone: true,
    imports: [CommonModule, StatusTagComponent],
  templateUrl: './service-health.component.html',
  styleUrls: ['./service-health.component.scss']
})
export class ServiceHealthComponent implements OnInit {


    statusWebsite: Object = false
    statusAudioFile: Object = false


    constructor(private http: HttpClient) {}


    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'status/service/website', {withCredentials:true }).subscribe( (data) =>{
            this.statusWebsite = data;
        })

        this.http.get( environment.RPSERVER_OPI + 'status/service/audio-file', {withCredentials:true }).subscribe( (data) =>{
            this.statusAudioFile = data;
            console.log('audio', this.statusWebsite);
        })


    }


}
