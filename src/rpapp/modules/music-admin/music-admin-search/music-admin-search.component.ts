import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicAdminBreadcrumbService} from "../../../containers/music-admin-container/music-admin-breadcrumb.service";

@Component({
  selector: 'app-music-admin-search',
  standalone: true,
  imports: [CommonModule],
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
