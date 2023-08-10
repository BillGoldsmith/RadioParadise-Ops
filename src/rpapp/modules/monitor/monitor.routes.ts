import {Routes} from '@angular/router';
import {ServersBandwidthComponent} from "./bandwidth/servers-bandwidth.component";
import {StreamSyncStatusComponent} from "./stream-sync-status/stream-sync-status.component";

export default [
    {
        path     : 'bandwidth',
        component: ServersBandwidthComponent,
        data: {title: 'Bandwidth'}
    },
    {
        path     : 'stream-sync-status',
        component: StreamSyncStatusComponent,
        data: {title: 'Stream Sync Status'}
    },
] as Routes;