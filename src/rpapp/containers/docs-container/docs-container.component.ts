import {Component} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router, RouterOutlet} from "@angular/router";
import {FuseScrollResetDirective} from "../../../@fuse/directives/scroll-reset";
import {distinctUntilChanged, filter, map} from "rxjs";

@Component({
    selector: 'app-docs-container',
    templateUrl: './docs-container.component.html',
    styleUrls: ['./docs-container.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FuseScrollResetDirective],
})
export class DocsContainerComponent {

    title = '';

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        try {
            this.title = this.activatedRoute.snapshot.children[0].data.title
        }catch (e){}

        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd),
            filter(event => (event as ActivationEnd).snapshot.component === DocsContainerComponent),
            map(event => (event as ActivationEnd).snapshot.children),
            distinctUntilChanged()
        ).subscribe(children => {
            try {
                this.title = children[0].data.title
            }catch (e){}
        })

    }

}
