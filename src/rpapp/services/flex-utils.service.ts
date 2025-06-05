import {Injectable} from '@angular/core';
import {AccountService} from "../core/account/account.service";
import {UUID} from "angular2-uuid";

@Injectable({
    providedIn: 'root'
})
export class FlexUtilsService {

    constructor(private accountService: AccountService) {
    }


    getCredentials(){

        const account = this.accountService.getAccount()
        return {
            userId: account.user_id,
            authToken: this.accountService.getAuthToken(),
            source: 24
        }


    }




}
