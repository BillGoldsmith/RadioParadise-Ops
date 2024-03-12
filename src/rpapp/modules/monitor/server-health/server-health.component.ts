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
                console.log(data)
                this.pageData = data;
            });

    }

    ngOnInit(): void {

    }


}
