import {Routes} from '@angular/router';
import {AccountsIndexComponent} from "./accounts-index/accounts-index.component";

export default [

    {
        path     : 'index',
        component: AccountsIndexComponent,
        data: {title: 'Accounts'}
    },
    {
        path     : 'index/:search_text',
        component: AccountsIndexComponent,
        data: {title: 'Accounts'}
    },
] as Routes;
