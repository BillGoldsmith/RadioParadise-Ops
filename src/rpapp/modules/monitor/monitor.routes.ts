import {Routes} from '@angular/router';
import {ServersBandwidthComponent} from "./bandwidth/servers-bandwidth.component";
import {StreamSyncStatusComponent} from "./stream-sync-status/stream-sync-status.component";
import {ServerHealthComponent} from "./server-health/server-health.component";
import {ChannelBuildComponent} from "./channel-build/channel-build.component";
import {ServiceHealthComponent} from "./service-health/service-health.component";
import {ChannelStatusComponent} from "./channel-status/channel-status.component";
import {ChannelStreamsComponent} from "./channel-streams/channel-streams.component";
import {ChannelFilesComponent} from "./channel-files/channel-files.component";

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
        path     : 'service-health',
        component: ServiceHealthComponent,
        data: {title: 'Service Health'}
    },
    {
        path     : 'channel/build',
        component: ChannelBuildComponent,
        data: {title: 'Channel Build'}
    },
    {
        path     : 'channel/status',
        component: ChannelStatusComponent,
        data: {title: 'Channel Status'}
    },
    {
        path     : 'channel/streams',
        component: ChannelStreamsComponent,
        data: {title: 'Channel Streams'}
    },
    {
        path     : 'channel/files',
        component: ChannelFilesComponent,
        data: {title: 'Channel Files'}
    },
] as Routes;
