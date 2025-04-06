import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountModel} from "../../../core/account/account.model";
import {AccountService} from "../../../core/account/account.service";
import {environment} from "../../../../zenvironments/environment";

@Component({
  selector: 'app-flex-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex-test.component.html',
  styleUrls: ['./flex-test.component.scss']
})
export class FlexTestComponent {

    account: AccountModel


    /**
     * Constructor
     */
    constructor(
        private accountService: AccountService
    )
    {

        this.account = accountService.getAccount();
        console.log('account', this.account)

    }

    protected readonly environment = environment;
}
