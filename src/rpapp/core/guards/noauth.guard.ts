import {inject} from '@angular/core';
import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {of} from 'rxjs';
import {AccountService} from "../account/account.service";

export const NoAuthGuard: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);
    const account: AccountService = inject(AccountService)

    if (!account.isAuthenticated() || !account.isCreator()){
        return  of(true)
    }

    const urlTree = router.parseUrl(``);
    return of(urlTree);


};
