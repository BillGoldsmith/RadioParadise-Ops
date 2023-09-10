import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicAdminBreadcrumbService} from "../../../containers/music-admin-container/music-admin-breadcrumb.service";
import {MusicSearchFilterComponent} from "../components/music-search-filter/music-search-filter.component";
import {MusicBrainzExplorerComponent} from "../components/music-brainz-explorer/music-brainz-explorer.component";

@Component({
  selector: 'app-music-admin-search',
  standalone: true,
    imports: [CommonModule, MusicSearchFilterComponent, MusicBrainzExplorerComponent],
  templateUrl: './music-admin-search.component.html',
  styleUrls: ['./music-admin-search.component.scss']
})
export class MusicAdminSearchComponent implements OnInit{

    constructor(private musicAdminBreadcrumbService: MusicAdminBreadcrumbService) {
    }
    ngOnInit(): void {
        this.musicAdminBreadcrumbService.setForTop();
    }

}
