import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Subscription} from 'rxjs/internal/Subscription';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../../../zenvironments/environment";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-dlg-admin-account-activate',
    standalone: true,
    templateUrl: './dlg-admin-account-activate.component.html',
    imports: [
        CommonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ],
    styleUrls: ['./dlg-admin-account-activate.component.scss']
})
export class DlgAdminAccountActivateComponent implements OnInit, OnDestroy {

    private subscriptions = new Subscription();

    registerForm: UntypedFormGroup;
    registerFormErrors: any;

    private user_id = '';

    private loading = false;
    success = false;

    constructor(public dialogRef: MatDialogRef<DlgAdminAccountActivateComponent>,
                @Inject(MAT_DIALOG_DATA) public dialogData: any,
                private formBuilder: UntypedFormBuilder,
                private http: HttpClient) {

        this.registerFormErrors = {
            form: {},
            username: {}
        };

        this.user_id = dialogData.user_id;

    }

    ngOnInit() {
        console.log('dialogdata', this.dialogData);
        let initialUsername = this.dialogData.username ?? "";

        if (this.dialogData.username === this.dialogData.user_id) {
            initialUsername = '';
        }

        try {
            if (initialUsername === null || initialUsername === '') {
                initialUsername = this.dialogData.email.substring(0, this.dialogData.email.indexOf('@'));
            }
        }catch(e){}

        if (initialUsername === null || initialUsername === '') {
            initialUsername = this.dialogData.email;
        }

        this.registerForm = this.formBuilder.group({
            username: [initialUsername, [Validators.required]],
        });

        this.subscriptions.add(this.registerForm.valueChanges.subscribe(() => {
            this.onRegisterFormValuesChanged();
        }));

    }


    onRegisterFormValuesChanged() {
        for (const field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.registerFormErrors[field] = {};

            // Get the control
            const control = this.registerForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    }

    submitForm() {


        if (this.loading) {
            return;
        } else {
            // submit form
            this.loading = true;

            const qp = {
                file: 'admin::accounts::actions',
                action: 'activate',
                user_id: this.user_id,
            };

            Object.assign(qp, this.registerForm.value);

            this.http.get(environment.RPSERVER_SITEAPI, {
                params: qp,
                responseType: 'json',
                withCredentials: true
            }).subscribe(data => {
                this.handleResponse(data);
            }, error => {
                console.log('unknown error');
            }, () => {
                this.loading = false;
            });

        }

    }


    handleResponse(data) {

        this.registerFormErrors.form = {};
        if (data.status === 'error') {


            if (data['error']['field'] === 'form') {
                this.registerFormErrors.form = {remote: data['error']['message']};
            } else {
                this.registerForm.controls[data['error']['field']].setErrors({remote: data['error']['message']});
            }


        } else {
            // display success message
            this.success = true;

            // update login state
            this.dialogRef.close(true);


        }

    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

}
