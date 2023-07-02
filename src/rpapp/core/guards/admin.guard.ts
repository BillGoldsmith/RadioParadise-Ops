import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { of, switchMap } from 'rxjs';
import {AccountService} from "../account/account.service";

export const AdminGuard: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);
    const account: AccountService = inject(AccountService)


    if (account.isAdmin()){
        return  of(true)
    }

    const urlTree = router.parseUrl(`auth/unauthorized`);
    return of(urlTree);


};
