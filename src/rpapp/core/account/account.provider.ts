import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {APP_INITIALIZER, ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider} from '@angular/core';
import { authInterceptor } from 'app/core/auth/auth.interceptor';
import { AuthService } from 'app/core/auth/auth.service';
import {AccountService} from "./account.service";

export const provideAccount = (): Array<Provider | EnvironmentProviders> =>
{
    return [
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(AccountService).init(),
            multi   : true,
        },
    ];
};
