import {Routes} from '@angular/router';
import {CacheInvalidationComponent} from "./cache-invalidation/cache-invalidation.component";
import {PlaylistsTestLiveComponent} from "./playlists/playlists-test-live/playlists-test-live.component";
import {
    PlaylistsTestCacheHistoryComponent
} from "./playlists/playlists-test-cache-history/playlists-test-cache-history.component";
import {
    PlaylistsTestScheduledPromosComponent
} from "./playlists/playlists-test-scheduled-promos/playlists-test-scheduled-promos.component";
import {TestCoverArtComponent} from "./test-cover-art/test-cover-art.component";


export default [
    {
        path     : 'cache-invalidation',
        component: CacheInvalidationComponent,
        data: {title: 'Cache Invalidation'}
    },
    {
        path     : 'playlists/test-live',
        component: PlaylistsTestLiveComponent,
        data: {title: 'Test: Playlist Live'}
    },
    {
        path     : 'playlists/test-cache-history',
        component: PlaylistsTestCacheHistoryComponent,
        data: {title: 'Test: Playlist Cache History'}
    },
    {
        path     : 'playlists/test-scheduled-promos',
        component: PlaylistsTestScheduledPromosComponent,
        data: {title: 'Test: Playlist Scheduled Promos'}
    },
    {
        path     : 'test-cover-art',
        component: TestCoverArtComponent,
        data: {title: 'Test: Cover Art'}
    },
] as Routes;
