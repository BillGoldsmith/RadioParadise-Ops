import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from 'app/core/auth/auth.service';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {AccountService} from "../account/account.service";
import {HttpToastrAlerterService} from "../AutoResponseToastrAlerter/http-toastr-alerter.service";


/**
 * Intercept
 *
 * @param req
 * @param next
 */
export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> =>
{
    const authService = inject(AuthService);
    const accountService = inject(AccountService);
    const httpToastrAlerterService = inject(HttpToastrAlerterService);
    // Clone the request object
    let newReq = req.clone();



    // Response
    return next(newReq).pipe(

        tap((evt: HttpEvent<any>) => {
            if (evt instanceof HttpResponse) {
                if (evt.body) {
                    if (evt.body['__alert']) {
                        httpToastrAlerterService.showAlertConfirmation(evt.body['__alert']);
                    }
                    if (evt.body['__toast']) {
                        httpToastrAlerterService.showToastAlert(evt.body['__toast']);
                    }
                }
            }
        }),

        catchError((error) =>
        {
            // Catch "401 Unauthorized" responses
            if ( error instanceof HttpErrorResponse && error.status === 401 && accountService.isAuthenticated() )
            {
                // Reload the app
                location.reload();
            }

            return throwError(error);
        }),
    );
};
