import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {environment} from "../../../../zenvironments/environment";
import {finalize} from "rxjs";
import {UUID} from "angular2-uuid";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DlgAdminAccountDeleteComponent} from "./dialogs/dlg-admin-account-delete/dlg-admin-account-delete.component";
import {
    DlgAdminAccountActivateComponent
} from "./dialogs/dlg-admin-account-activate/dlg-admin-account-activate.component";
import {
    DlgAdminAccountChangePasswordComponent
} from "./dialogs/dlg-admin-account-change-password/dlg-admin-account-change-password.component";
import {
    DlgAdminAccountChangeLevelComponent
} from "./dialogs/dlg-admin-account-change-level/dlg-admin-account-change-level.component";
import {
    DlgAdminAccountChangeUsernameComponent
} from "./dialogs/dlg-admin-account-change-username/dlg-admin-account-change-username.component";
import {
    DlgAdminAccountChangeEmailComponent
} from "./dialogs/dlg-admin-account-change-email/dlg-admin-account-change-email.component";
import {DlgDeleteComponent} from "../../../components/dialogs/dlg-delete/dlg-delete.component";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-accounts-index',
    standalone: true,
    imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
    templateUrl: './accounts-index.component.html',
    styleUrls: ['./accounts-index.component.scss']
})
export class AccountsIndexComponent implements OnInit {

    public data: any = null;
    public favsData: any = null;
    public search_text = '';
    public search404 = false;


    private commandToken = '';
    private params = null;


    constructor(private http: HttpClient,
                private route: ActivatedRoute,
                private router: Router,
                public dialog: MatDialog) {

    }

    ngOnInit() {


        this.route.params.subscribe(params => {

            this.reset();
            this.params = params;

            if (params['search_text']) {
                this.search_text = params['search_text'];
                this.loadSearch();
            } else {
                this.search_text = '';
            }

        });

    }

    private reset() {
        this.commandToken = UUID.UUID();
        this.data = null;
        this.search404 = false;
    }


    private loadSearch() {

        this.favsData = null;
        const commandToken = this.commandToken;

        const qp = {file: 'admin::search::account-search', search_text: this.params.search_text};

        this.http.get(environment.RPSERVER_SITEAPI, {
            params: qp,
            responseType: 'json',
            withCredentials: true
        }).subscribe(data => {
            if (commandToken !== this.commandToken) {
                return;
            }
            if (data['data']['user_id'] === this.params.search_text) {
                this.data = data['data'];
            } else {
                this.router.navigate(['/accounts/index/', data['data']['user_id']], {replaceUrl: true});
            }

            this.updateFavsCount(this.data);

        }, error => {

            if (error.status === 404) {
                this.search404 = true;
            }

        });

    }


    clickSearch() {
        console.log('refresh', this.params['search_text'], this.search_text.trim());
        if (this.search_text.trim().length > 0) {

            if (this.params['search_text'] === this.search_text.trim()) {

                this.reset();
                this.loadSearch();

            } else {
                this.router.navigate(['/accounts/index/', this.search_text.trim()]);
            }

        }
    }


    clickToggleLocked() {

        let title = '';
        let message = '';
        let confirm = '';


        if (this.data.locked === 't') {
            title = 'Unlock account';
            message = 'Are you sure?';
            confirm = 'Yes unlock it.';
        } else {
            title = 'Lock account';
            message = 'Are you sure?';
            confirm = 'Yes lock it.';
        }

        const dialogRef = this.dialog.open(DlgDeleteComponent, {
            data: {
                title: title,
                message: message,
                confirm: confirm
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {


                const action = (this.data.locked === 't') ? 'unlock' : 'lock';
                const qp = {file: 'admin::accounts::actions', action: action, user_id: this.data.user_id};

                this.reset();
                this.http.get(environment.RPSERVER_SITEAPI, {params: qp, responseType: 'json', withCredentials: true})
                    .pipe(finalize(() => this.loadSearch()))
                    .subscribe(data => {

                    });


            }
        });

    }


    clickDelete() {

        const dialogRef = this.dialog.open(DlgAdminAccountDeleteComponent, {
            data: this.data,
            maxWidth: '450px'
        });


        dialogRef.afterClosed().subscribe(result => {
            if (result === 'delete' || result === 'delete-purge') {


                const action = result;
                const qp = {file: 'admin::accounts::actions', action: action, user_id: this.data.user_id};

                this.reset();
                this.http.get(environment.RPSERVER_SITEAPI, {params: qp, responseType: 'json', withCredentials: true})
                    .pipe(finalize(() => this.loadSearch()))
                    .subscribe(data => {

                    });


            }
        });


    }


    clickActivate() {

        const dialogRef = this.dialog.open(DlgAdminAccountActivateComponent, {
            data: this.data,
            maxWidth: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result) {
                this.reset();
                this.loadSearch();
            }
        });

    }

    clickChangePassword() {

        this.dialog.open(DlgAdminAccountChangePasswordComponent, {
            data: this.data,
            maxWidth: '450px'
        });

    }


    clickChangeLevel() {

        const dialogRef = this.dialog.open(DlgAdminAccountChangeLevelComponent, {
            data: this.data,
            maxWidth: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {

                const action = 'change-level';
                const qp = {
                    file: 'admin::accounts::actions',
                    action: action,
                    user_id: this.data.user_id,
                    level: result
                };

                this.reset();
                this.http.get(environment.RPSERVER_SITEAPI, {params: qp, responseType: 'json', withCredentials: true})
                    .pipe(finalize(() => this.loadSearch()))
                    .subscribe(data => {

                    });


            }
        });

    }


    clickChangeUsername() {

        const dialogRef = this.dialog.open(DlgAdminAccountChangeUsernameComponent, {
            data: this.data,
            maxWidth: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result) {
                this.reset();
                this.loadSearch();
            }

        });

    }

    clickChangeEmail() {

        const dialogRef = this.dialog.open(DlgAdminAccountChangeEmailComponent, {
            data: this.data,
            maxWidth: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result) {
                this.reset();
                this.loadSearch();
            }

        });

    }

    clickToggleNewsletter() {

        let title = '';
        let message = '';
        let confirm = '';


        if (this.data.newsletter === '1') {
            title = 'Unsubscribe account';
            message = 'Are you sure?';
            confirm = 'Yes unsubscribe.';
        } else {
            title = 'Subscribe account';
            message = 'Are you sure?';
            confirm = 'Yes subscribe.';
        }

        const dialogRef = this.dialog.open(DlgDeleteComponent, {
            data: {
                title: title,
                message: message,
                confirm: confirm
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {


                const action = (this.data.newsletter === '1') ? 'unsubscribe' : 'subscribe';
                const qp = {file: 'admin::accounts::actions', action: action, user_id: this.data.user_id};

                this.reset();
                this.http.get(environment.RPSERVER_SITEAPI, {params: qp, responseType: 'json', withCredentials: true})
                    .pipe(finalize(() => this.loadSearch()))
                    .subscribe(data => {

                    });


            }
        });


    }

    updateFavsCount(account) {

        const qp = {C_user_id: account.user_id};
        this.http.get(environment.RPSERVER_API + 'list_chan_favscount', {
            params: qp,
            responseType: 'json',
            withCredentials: true
        }).subscribe(data => {

            if (this.data === account) {
                console.log('match', account);
                this.favsData = data;
            } else {
                console.log('no match', account);
            }

        });

    }


}
