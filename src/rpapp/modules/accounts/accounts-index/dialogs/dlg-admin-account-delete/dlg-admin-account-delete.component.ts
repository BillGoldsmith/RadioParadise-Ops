import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-dlg-admin-account-delete',
    standalone: true,
    templateUrl: './dlg-admin-account-delete.component.html',
    imports: [
        MatDialogModule,
        MatSlideToggleModule,
        FormsModule,
        MatButtonModule
    ],
    styleUrls: ['./dlg-admin-account-delete.component.scss']

})
export class DlgAdminAccountDeleteComponent implements OnInit {

    purgeChecked = false;

    constructor(public dialogRef: MatDialogRef<DlgAdminAccountDeleteComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
    }

}
