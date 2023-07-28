import {Component} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {FuseScrollResetDirective} from "../../../@fuse/directives/scroll-reset";

@Component({
    selector: 'app-toolbox-container',
    templateUrl: './toolbox-container.component.html',
    styleUrls: ['./toolbox-container.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FuseScrollResetDirective],
})
export class ToolboxContainerComponent {

    title = '';

    constructor(private activatedRoute: ActivatedRoute) {

        this.activatedRoute.firstChild.data.subscribe(data => {
            //console.log('data', data)
            this.title = data.title
        })

    }

}
