import { Routes } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";

export default [
    {
        path     : 'unauthorized',
        component: UnauthorizedComponent,
    },
] as Routes;
