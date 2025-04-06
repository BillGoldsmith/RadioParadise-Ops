import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../zenvironments/environment";
import {MatButtonModule} from "@angular/material/button";
import "@andypf/json-viewer"
@Component({
  selector: 'app-flex-debug',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './flex-debug.component.html',
  styleUrls: ['./flex-debug.component.scss']
})
export class FlexDebugComponent implements OnInit{


    nodeList: any = false;
    leafList: any = false;
    treeList: any = false;


    constructor(private http: HttpClient) {}

    ngOnInit(): void {

    }




    clickRefreshNodeList(){
        this.http.get( environment.FLEX_API + 'admin/dump/node', {withCredentials:true }).subscribe( (data) =>{
            this.nodeList = JSON.stringify(data);
        })
    }

    clickRefreshLeafList(){
        this.http.get( environment.FLEX_API + 'admin/dump/leaf', {withCredentials:true }).subscribe( (data) =>{
            this.leafList = JSON.stringify(data);
        })
    }


    clickRefreshTreeList(){
        this.http.get( environment.FLEX_API + 'admin/dump/tree', {withCredentials:true }).subscribe( (data) =>{
            this.treeList = JSON.stringify(data);
        })
    }

}
