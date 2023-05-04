import { Route } from '@angular/router';
import { FileManagerDetailsComponent } from 'app/modules/admin/apps/file-manager/details/details.component';
import { FileManagerComponent } from 'app/modules/admin/apps/file-manager/file-manager.component';
import { CanDeactivateFileManagerDetails } from 'app/modules/admin/apps/file-manager/file-manager.guards';
import { FileManagerFolderResolver, FileManagerItemResolver, FileManagerItemsResolver } from 'app/modules/admin/apps/file-manager/file-manager.resolvers';
import { FileManagerListComponent } from 'app/modules/admin/apps/file-manager/list/list.component';

export const fileManagerRoutes: Route[] = [
    {
        path     : '',
        component: FileManagerComponent,
        children : [
            {
                path     : 'folders/:folderId',
                component: FileManagerListComponent,
                resolve  : {
                    item: FileManagerFolderResolver,
                },
                children : [
                    {
                        path         : 'details/:id',
                        component    : FileManagerDetailsComponent,
                        resolve      : {
                            item: FileManagerItemResolver,
                        },
                        canDeactivate: [CanDeactivateFileManagerDetails],
                    },
                ],
            },
            {
                path     : '',
                component: FileManagerListComponent,
                resolve  : {
                    items: FileManagerItemsResolver,
                },
                children : [
                    {
                        path         : 'details/:id',
                        component    : FileManagerDetailsComponent,
                        resolve      : {
                            item: FileManagerItemResolver,
                        },
                        canDeactivate: [CanDeactivateFileManagerDetails],
                    },
                ],
            },
        ],
    },
];
