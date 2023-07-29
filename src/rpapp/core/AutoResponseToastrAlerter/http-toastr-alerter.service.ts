import {Inject, Injectable, Injector} from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {FuseAlertService} from "../../../@fuse/components/alert";
import {FuseConfirmationDialogComponent} from "../../../@fuse/services/confirmation/dialog/dialog.component";
import {FuseConfirmationConfig, FuseConfirmationService} from "../../../@fuse/services/confirmation";
import {ToastrService} from "ngx-toastr";


@Injectable({
    providedIn: 'root'
})
export class HttpToastrAlerterService {

    constructor(
        @Inject(Injector) private readonly injector: Injector,
        private fuseConfirmationService: FuseConfirmationService,
    ) {
    }

    private get toastr(): ToastrService {
        return this.injector.get(ToastrService);
    }

    public showToastAlert(toast: any) {
        console.log("show toast", toast)
        if (toast['type'] === 'success') {
            this.toastr.success(toast['message'], toast['title']);
        } else if (toast['type'] === 'error') {
            console.log("show toast", toast)
            this.toastr.error(toast['message'], toast['title']);
        } else if (toast['type'] === 'info') {
            this.toastr.info(toast['message'], toast['title']);
        } else if (toast['type'] === 'warning') {
            this.toastr.warning(toast['message'], toast['title']);
        }
    }

    public showAlertConfirmation(alert: any) {

        const config: FuseConfirmationConfig = {
            title: alert.title,
            message: alert.message,
            icon: {show: false, color: 'info'},
            actions: {
                confirm: {color: 'primary', label: 'Ok'},
                cancel: {show: false},
            },
            dismissible: true
        }
        const dialogRef = this.fuseConfirmationService.open(config);

    }

}
