import {BooleanInput} from '@angular/cdk/coercion';
import {NgClass, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {Router, RouterLink} from '@angular/router';
import {AccountService} from "../../../../rpapp/core/account/account.service";
import {AccountModel} from "../../../../rpapp/core/account/account.model";

@Component({
    selector       : 'user',
    templateUrl    : './user.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'user',
    standalone     : true,
    imports: [MatButtonModule, MatMenuModule, NgIf, MatIconModule, NgClass, MatDividerModule, RouterLink],
})
export class UserComponent
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    account: AccountModel


    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private accountService: AccountService
    )
    {
        this.account = accountService.getAccount();
        console.log('account', this.account)
    }



    /**
     * Sign out
     */
    signOut(): void
    {
        this.accountService.signOut();
    }
}
