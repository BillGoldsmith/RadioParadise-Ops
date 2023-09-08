import {Routes} from '@angular/router';
import {MusicAdminSearchComponent} from "./music-admin-search/music-admin-search.component";

export default [
    {
        path     : 'search',
        component: MusicAdminSearchComponent,
        data: {title: 'Music Search'}
    },
] as Routes;
