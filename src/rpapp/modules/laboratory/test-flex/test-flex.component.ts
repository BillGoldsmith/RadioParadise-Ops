import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountService} from "../../../core/account/account.service";
import {AccountModel} from "../../../core/account/account.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-flex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-flex.component.html',
  styleUrls: ['./test-flex.component.scss']
})
export class TestFlexComponent {

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

}
