import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-dlg-delete',
    standalone: true,
    templateUrl: './dlg-delete.component.html',
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    styleUrls: ['./dlg-delete.component.scss']
})
export class DlgDeleteComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DlgDeleteComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {
    }




}
