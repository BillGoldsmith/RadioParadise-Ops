import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, ActivationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {Select, Store} from "@ngxs/store";
import {BreadcrumbState, BreadcrumbXSM} from "../../../store/breadcrumb.state";
import {distinctUntilChanged, filter, map, Observable} from "rxjs";
import {BreadcrumbModel} from "../../../model/breadcrumb.model";

@Component({
  selector: 'app-music-admin-container',
  standalone: true,
    imports: [CommonModule, MatIconModule, RouterLink, MatButtonModule, RouterOutlet],
  templateUrl: './music-admin-container.component.html',
  styleUrls: ['./music-admin-container.component.scss']
})
export class MusicAdminContainerComponent implements OnInit{

    @Select(BreadcrumbState.music)
    breadcrumbs$: Observable<BreadcrumbModel[]>

    title = '';

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private store: Store
    ) {
        try {
            this.title = this.activatedRoute.snapshot.children[0].data.title
        }catch (e){}

        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd),
            filter(event => (event as ActivationEnd).snapshot.component === MusicAdminContainerComponent),
            map(event => (event as ActivationEnd).snapshot.children),
            distinctUntilChanged()
        ).subscribe(children => {
            try {
                this.title = children[0].data.title
            }catch (e){}
        })

    }

    ngOnInit() {

    }

}
