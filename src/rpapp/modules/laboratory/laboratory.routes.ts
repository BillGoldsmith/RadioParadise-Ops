import {Routes} from '@angular/router';
import {TestFlexComponent} from "./test-flex/test-flex.component";



export default [
    {
        path     : 'test-flex',
        component: TestFlexComponent,
        data: {title: 'Test Flex'}
    }
] as Routes;
