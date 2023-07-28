import {Routes} from '@angular/router';
import {CacheInvalidationComponent} from "./cache-invalidation/cache-invalidation.component";


export default [
    {
        path     : 'cache-invalidation',
        component: CacheInvalidationComponent,
        data: {title: 'Cache Invalidation'}
    },
] as Routes;
