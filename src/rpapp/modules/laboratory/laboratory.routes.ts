import {Routes} from '@angular/router';
import {FlexTestComponent} from "./flex-test/flex-test.component";
import {FlexDebugComponent} from "./flex-debug/flex-debug.component";


export default [
    {
        path     : 'flex-test',
        component: FlexTestComponent,
        data: {title: 'Flex Test'}
    },
    {
        path     : 'flex-debug',
        component: FlexDebugComponent,
        data: {title: 'Flex Debug'}
    }
] as Routes;

