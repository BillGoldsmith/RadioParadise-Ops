import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {environment} from "../../../../zenvironments/environment";
import {finalize} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Nl2brPipe} from "../../../pipes/nl2br.pipe";

@Component({
    selector: 'app-server-health',
    standalone: true,
    imports: [CommonModule, Nl2brPipe],
    templateUrl: './server-health.component.html',
    styleUrls: ['./server-health.component.scss']
})
export class ServerHealthComponent implements OnInit {

    pageData;

    constructor(private http: HttpClient) {


        this.http.get(environment.RPSERVER_API + 'server_health_report', {responseType: 'json', withCredentials: true})
            .subscribe(data => {

                this.pageData = this.decorateData(data);
            });

    }

    ngOnInit(): void {

    }

    decorateData(data){
        console.log('decorateData',data);
        data.forEach(server =>{
           if (server.server_data.timestamp){
               server.server_data.refreshed = this.secToTime( (Date.now() / 1000) - server.server_data.timestamp );
           }
            console.log('decoratedData',(Date.now() / 1000) - server.server_data.timestamp);
        });

        return data;
    }

    secToTime(input_seconds) {
        let ms = input_seconds * 1000;
        let seconds = (ms / 1000).toFixed(1);
        let minutes = (ms / (1000 * 60)).toFixed(1);
        let hours = (ms / (1000 * 60 * 60)).toFixed(1);
        let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
        // @ts-ignore
        if (seconds < 60) return seconds + " Sec";
        else { // @ts-ignore
            if (minutes < 60) return minutes + " Min";
            else { // @ts-ignore
                if (hours < 24) return hours + " Hrs";
                else return days + " Days"
            }
        }
    }

}
