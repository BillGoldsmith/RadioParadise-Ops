import {Routes} from '@angular/router';
import {ReportsClientsComponent} from "./reports-clients/reports-clients.component";
import {ReportsAccountsRecentComponent} from "./reports-accounts-recent/reports-accounts-recent.component";
import {
    ReportsAutomotiveLanguagesComponent
} from "./reports-automotive-languages/reports-automotive-languages.component";
import {ReportsAccountsActiveComponent} from "./reports-accounts-active/reports-accounts-active.component";
import {ReportsChannelsClientsComponent} from "./reports-channels-clients/reports-channels-clients.component";
import {ReportsChannelsStreamsComponent} from "./reports-channels-streams/reports-channels-streams.component";
import {ReportsAccountsDownloadComponent} from "./reports-accounts-download/reports-accounts-download.component";
import {ReportsSongsNewReleasesComponent} from "./reports-songs-new-releases/reports-songs-new-releases.component";
import {ReportsSendyListComponent} from "./reports-sendy-list/reports-sendy-list.component";



export default [
    {
        path     : 'clients',
        component: ReportsClientsComponent,
        data: {title: 'Report Clients'}
    },
    {
        path     : 'channels-clients',
        component: ReportsChannelsClientsComponent,
        data: {title: 'Report Channels Clients'}
    },
    {
        path     : 'channels-streams',
        component: ReportsChannelsStreamsComponent,
        data: {title: 'Report Channels Streams'}
    },
    {
        path     : 'accounts-active',
        component: ReportsAccountsActiveComponent,
        data: {title: 'Report Accounts Active'}
    },
    {
        path     : 'accounts-recent',
        component: ReportsAccountsRecentComponent,
        data: {title: 'Report Accounts Recent'}
    },
    {
        path     : 'accounts-download',
        component: ReportsAccountsDownloadComponent,
        data: {title: 'Report Accounts Download'}
    },
    {
        path     : 'automotive-languages',
        component: ReportsAutomotiveLanguagesComponent,
        data: {title: 'Report Automotive Languages'}
    },
    {
        path     : 'songs-new-releases',
        component: ReportsSongsNewReleasesComponent,
        data: {title: 'Report Songs (new releases)'}
    },
    {
        path     : 'sendy-list',
        component: ReportsSendyListComponent,
        data: {title: 'Report Sendy List'}
    },

] as Routes;
