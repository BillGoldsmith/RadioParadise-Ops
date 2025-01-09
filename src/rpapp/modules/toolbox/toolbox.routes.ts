import {Routes} from '@angular/router';
import {CacheInvalidationComponent} from "./cache-invalidation/cache-invalidation.component";
import {TestCoverArtComponent} from "./test-cover-art/test-cover-art.component";


export default [
    {
        path     : 'cache-invalidation',
        component: CacheInvalidationComponent,
        data: {title: 'Cache Invalidation'}
    },
    {
        path     : 'test-cover-art',
        component: TestCoverArtComponent,
        data: {title: 'Test: Cover Art'}
    },
] as Routes;
