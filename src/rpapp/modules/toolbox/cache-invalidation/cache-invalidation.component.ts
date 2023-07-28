import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";
import {finalize} from "rxjs";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cache-invalidation',
  standalone: true,
    imports: [CommonModule, FormsModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './cache-invalidation.component.html',
  styleUrls: ['./cache-invalidation.component.scss']
})
export class CacheInvalidationComponent implements OnInit {

    loading = false;
    form_host = 'img.radioparadise.com';
    form_url = '';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }


    submitForm(){

        this.loading = true;

        const postData = new FormData();
        postData.set('host', this.form_host);
        postData.set('url', this.form_url);

        this.http.post(environment.RPSERVER_API + 'varnish_invalidation', postData, {withCredentials: true, responseType: 'text'})
            .pipe(finalize(() => this.loading = false))
            .subscribe(data => {
                // console.log('post', data);



            });

    }

    resetForm(){

        this.form_host = 'img.radioparadise.com';
        this.form_url = '';

    }

}
