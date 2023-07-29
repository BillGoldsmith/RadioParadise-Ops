import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-dlg-admin-account-change-level',
    standalone: true,
    templateUrl: './dlg-admin-account-change-level.component.html',
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    styleUrls: ['./dlg-admin-account-change-level.component.scss']
})
export class DlgAdminAccountChangeLevelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DlgAdminAccountChangeLevelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
