import {Component} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {FuseScrollResetDirective} from "../../../@fuse/directives/scroll-reset";

@Component({
    selector: 'app-monitor-container',
    templateUrl: './monitor-container.component.html',
    styleUrls: ['./monitor-container.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FuseScrollResetDirective],
})
export class MonitorContainerComponent {

    title = '';

    constructor(private activatedRoute: ActivatedRoute) {

        this.activatedRoute.firstChild.data.subscribe(data => {
            //console.log('data', data)
            this.title = data.title
        })

    }

}
