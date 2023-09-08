import {Route} from '@angular/router';
import {initialDataResolver} from 'app/app.resolvers';

import {LayoutComponent} from 'app/layout/layout.component';
import {NoAuthGuard} from "../rpapp/core/guards/noauth.guard";
import {AdminGuard} from "../rpapp/core/guards/admin.guard";
import {MonitorContainerComponent} from "../rpapp/containers/monitor-container/monitor-container.component";
import {ToolboxContainerComponent} from "../rpapp/containers/toolbox-container/toolbox-container.component";
import {DocsContainerComponent} from "../rpapp/containers/docs-container/docs-container.component";
import {AccountsContainerComponent} from "../rpapp/containers/accounts-container/accounts-container.component";
import {MusicAdminContainerComponent} from "../rpapp/containers/music-admin-container/music-admin-container.component";

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'monitor/bandwidth'},
    {path: 'auth', canActivate: [NoAuthGuard], canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
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
            {path: 'monitor', component: MonitorContainerComponent, loadChildren: () => import('rpapp/modules/monitor/monitor.routes')},
            {path: 'toolbox', component: ToolboxContainerComponent, loadChildren: () => import('rpapp/modules/toolbox/toolbox.routes')},
            {path: 'docs', component: DocsContainerComponent, loadChildren: () => import('rpapp/modules/docs/docs.routes')},
            {path: 'accounts', component: AccountsContainerComponent, loadChildren: () => import('rpapp/modules/accounts/accounts.routes')},
            {path: 'music', component: MusicAdminContainerComponent, loadChildren: () => import('rpapp/modules/music-admin/music-admin.routes')},

        ]
    }
    ,{ path: '**', redirectTo: 'monitor/bandwidth' }
];
