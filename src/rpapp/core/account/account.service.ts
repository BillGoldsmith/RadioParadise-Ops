import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../app/core/user/user.service";
import {AccountModel, initialAccount} from "./account.model";
import {catchError, forkJoin, lastValueFrom, Observable, of, switchMap} from "rxjs";
import {environment} from "../../../zenvironments/environment";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({providedIn: 'root'})
export class AccountService {
    private _authenticated: boolean = false;
    private _account: AccountModel = initialAccount

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private _router: Router,
        private _cookieService: CookieService
    ) {



    }

    init(): Promise<boolean>{
        console.log("accountService init a");

         return lastValueFrom( this._httpClient.get(environment.RPSERVER_API + 'auth', {
            responseType: 'json',
            withCredentials: true})
             .pipe(
                 catchError((err) => {
                     console.log("accountService error", err);
                     return of(false);
                 }),
                 switchMap((response: any) => {
                     console.log("accountService success", response);
                    if (response['status'] === 'success') {

                        let username = '';
                        if (response['username']) {
                            username = response['username'];
                        }

                        const account = new AccountModel();
                        account.user_id = response['user_id'];
                        account.level = response['level'];
                        account.username = username;
                        account.country_code = response['country_code'];
                        account.avatar = response['avatar'];

                        this._authenticated = true;
                        this._account = account;

                        this._router.initialNavigation();
                        return of (true)

                    }
                }
            ),
        ));


    }

    getAccount(): AccountModel{
        return  this._account;
    }

    isAuthenticated(): boolean{
        return this._authenticated;
    }

    isAdmin(): boolean {
        return this._account.level >= 5;
    }

    isCreator(): boolean {
        return this._account.level >= 4;
    }


    signOut(){
        sessionStorage.clear();
        localStorage.clear();
        this._cookieService.deleteAll('/', 'radioparadise.com');
        window.location.reload();
        //this._cookieService.delete("C_user_id","/",".radioparadsie.com",false,"None");
    }
}

