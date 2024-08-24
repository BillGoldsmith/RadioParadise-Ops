import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-channel-build',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channel-build.component.html',
  styleUrls: ['./channel-build.component.scss']
})
export class ChannelBuildComponent {

    pageData:any = false



    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( environment.RPSERVER_OPI + 'reports/channel_build/default', {withCredentials:true }).subscribe( (data) =>{

            console.log('loaddata', data);
            this.decorateData(data)

            this.pageData = data;
        })

    }

    decorateData(data){
        const now = Date.now() / 1000;
        data.chans.forEach( chan => {
            chan.rows.forEach( row => {
               row.start_diff = this.secToTime( now - row.start)
                row.finish_diff = this.secToTime( now - row.finish)
                row.duration = this.secToTime( row.finish - row.start)
                console.log ('times', now, row.start)
            });
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
