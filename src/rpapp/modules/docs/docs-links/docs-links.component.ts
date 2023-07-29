import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-docs-links',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './docs-links.component.html',
  styleUrls: ['./docs-links.component.scss']
})
export class DocsLinksComponent {

    constructor(private http: HttpClient) {
    }

    clickTest(){
        this.http.get(environment.RPSERVER_API + 'ztest').subscribe( data =>{

        });
    }

}
