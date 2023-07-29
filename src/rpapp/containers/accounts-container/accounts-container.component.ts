import {Component} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router, RouterOutlet} from "@angular/router";
import {FuseScrollResetDirective} from "../../../@fuse/directives/scroll-reset";
import {distinctUntilChanged, filter, map} from "rxjs";

@Component({
    selector: 'app-accounts-container',
    templateUrl: './accounts-container.component.html',
    styleUrls: ['./accounts-container.component.scss'],
    standalone: true,
    imports: [RouterOutlet, FuseScrollResetDirective],
})
export class AccountsContainerComponent {

    title = '';

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        try {
            this.title = this.activatedRoute.snapshot.children[0].data.title
        }catch (e){}

        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd),
            filter(event => (event as ActivationEnd).snapshot.component === AccountsContainerComponent),
            map(event => (event as ActivationEnd).snapshot.children),
            distinctUntilChanged()
        ).subscribe(children => {
            try {
                this.title = children[0].data.title
            }catch (e){}
        })

    }

}
