import {Component} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router, RouterOutlet} from "@angular/router";
import {FuseScrollResetDirective} from "../../../@fuse/directives/scroll-reset";
import {distinctUntilChanged, filter, map} from "rxjs";

@Component({
    selector: 'app-toolbox-container',
    templateUrl: './toolbox-container.component.html',
    styleUrls: ['./toolbox-container.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FuseScrollResetDirective],
})
export class ToolboxContainerComponent {

    title = '';

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        try {
            this.title = this.activatedRoute.snapshot.children[0].data.title
        }catch (e){}

        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd),
            filter(event => (event as ActivationEnd).snapshot.component === ToolboxContainerComponent),
            map(event => (event as ActivationEnd).snapshot.children),
            distinctUntilChanged()
        ).subscribe(children => {
            try {
                this.title = children[0].data.title
            }catch (e){}
        })

    }

}
