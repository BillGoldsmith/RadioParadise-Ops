import {Component} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router, RouterOutlet} from "@angular/router";
import {FuseScrollResetDirective} from "../../../@fuse/directives/scroll-reset";
import {distinctUntilChanged, filter, map, of, switchMap} from "rxjs";

@Component({
    selector: 'app-monitor-container',
    templateUrl: './monitor-container.component.html',
    styleUrls: ['./monitor-container.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FuseScrollResetDirective],
})
export class MonitorContainerComponent {

    title = '';

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        try {
            this.title = this.activatedRoute.snapshot.children[0].data.title
        }catch (e){}

        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd),
            filter(event => (event as ActivationEnd).snapshot.component === MonitorContainerComponent),
            map(event => (event as ActivationEnd).snapshot.children),
            distinctUntilChanged()
        ).subscribe(children => {
            try {
                this.title = children[0].data.title
            }catch (e){}
        })

    }



}
