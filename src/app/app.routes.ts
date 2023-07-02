import {Route} from '@angular/router';
import {initialDataResolver} from 'app/app.resolvers';

import {LayoutComponent} from 'app/layout/layout.component';
import {NoAuthGuard} from "../rpapp/core/guards/noauth.guard";
import {AdminGuard} from "../rpapp/core/guards/admin.guard";

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'servers/bandwidth'},
    {path: 'auth', canActivate: [NoAuthGuard], canActivateChild: [NoAuthGuard],
        data: {layout: 'empty'}, loadChildren: () => import('rpapp/modules/auth/auth.routes')},


    // Admin routes
    {
        path: '',
        canActivate: [AdminGuard],
        canActivateChild: [AdminGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            {path: 'servers', loadChildren: () => import('rpapp/modules/servers/servers.routes')},
        ]
    }
];
