import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-reports-sendy-list',
  standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './reports-sendy-list.component.html',
  styleUrls: ['./reports-sendy-list.component.scss']
})
export class ReportsSendyListComponent {

    loading = false;



    submitForm(){


        const url = environment.RPSERVER_SITEAPI +
            '?file=admin::reports::download-sendy-list-csv';

        //console.log (url);

        window.location.href = (url);

    }


}
