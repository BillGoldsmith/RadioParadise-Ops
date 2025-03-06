import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-channel-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channel-files.component.html',
  styleUrls: ['./channel-files.component.scss']
})
export class ChannelFilesComponent implements OnInit{


    pageData:any = false



    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){

        this.http.get( 'https://dj-tools.radioparadise.com/channel_file_check.php', {withCredentials:true }).subscribe( (data) =>{
            console.log('loaddata', data);
            this.pageData = data;
        })

    }







}
