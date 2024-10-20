import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-accounts-download',
  standalone: true,
    imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './reports-accounts-download.component.html',
  styleUrls: ['./reports-accounts-download.component.scss']
})
export class ReportsAccountsDownloadComponent {

    loading = false;

    range = new FormGroup({
        date_start: new FormControl<Date | null>(null),
        date_end: new FormControl<Date | null>(null),
    });


    constructor(private http: HttpClient) {}





    submitForm() {


        let start = this.range.value.date_start;
        let end = this.range.value.date_end;
        if ( !start){
            return
        }

        if (!end){
            end = new Date();
        }

        start = new Date(start);
        end = new Date(end);
        const label = start.toLocaleDateString('en-CA') + '_to_' + end.toLocaleDateString('en-CA');



        const url = environment.RPSERVER_SITEAPI +
            '?file=admin::reports::download-new-accounts-csv' +
            '&lower_limit=' + start.getTime() +
            '&upper_limit=' + end.getTime() +
            '&label=' + label ;

        //console.log (url);

        window.location.href = (url);

    }


}
