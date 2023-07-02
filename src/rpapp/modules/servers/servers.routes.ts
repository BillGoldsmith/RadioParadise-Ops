import { Routes } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import {ServersBandwidthComponent} from "./bandwidth/servers-bandwidth.component";

export default [
    {
        path     : 'bandwidth',
        component: ServersBandwidthComponent,
    },
] as Routes;
