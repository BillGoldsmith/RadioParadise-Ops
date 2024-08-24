import {Routes} from '@angular/router';
import {ServersBandwidthComponent} from "./bandwidth/servers-bandwidth.component";
import {StreamSyncStatusComponent} from "./stream-sync-status/stream-sync-status.component";
import {ServerHealthComponent} from "./server-health/server-health.component";
import {ChannelBuildComponent} from "./channel-build/channel-build.component";

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
    {
        path     : 'server-health',
        component: ServerHealthComponent,
        data: {title: 'Server Health'}
    },
    {
        path     : 'channel-build',
        component: ChannelBuildComponent,
        data: {title: 'Channel Build'}
    },
] as Routes;
