import {Routes} from '@angular/router';
import {DocsLinksComponent} from "./docs-links/docs-links.component";
import {DocsStrapiComponent} from "./docs-strapi/docs-strapi.component";


export default [
    {
        path     : 'links',
        component: DocsLinksComponent,
        data: {title: 'Links'}
    },
    {
        path     : 'strapi',
        component: DocsStrapiComponent,
        data: {title: 'Strapi'}
    },
] as Routes;
