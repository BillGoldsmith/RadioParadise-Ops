import {ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider} from "@angular/core";
import {HttpToastrAlerterService} from "./http-toastr-alerter.service";


export const provideHttpToastrAlerter = (): Array<Provider | EnvironmentProviders> =>
{
    return [
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(HttpToastrAlerterService),
            multi   : true,
        },
    ];
};
