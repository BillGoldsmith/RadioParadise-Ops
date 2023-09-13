import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {MusicSearchState, MusicSearchXSM} from "../../../../../store/music-search.state";
import {
    WidgetMusicBrainzListArtistComponent
} from "./widget-music-brainz-list-artist/widget-music-brainz-list-artist.component";
import {
    BrainzExplorerBreadtrail,
    BrainzExplorerBreadtrailNode
} from "./widget-music-brainz-explorer-breadtrail.service";

@Component({
  selector: 'app-widget-music-brainz-explorer',
  standalone: true,
    imports: [CommonModule, WidgetMusicBrainzListArtistComponent],
  templateUrl: './widget-music-brainz-explorer.component.html',
  styleUrls: ['./widget-music-brainz-explorer.component.scss']
})
export class WidgetMusicBrainzExplorerComponent implements OnInit{


    @Select(MusicSearchState) musicSearch$: Observable<MusicSearchXSM>;
    musicSearchXSM!: MusicSearchXSM;

    brainzExplorerBreadtrail: BrainzExplorerBreadtrail = new BrainzExplorerBreadtrail();


    constructor() {

    }

    ngOnInit() {

        this.musicSearch$.subscribe(next => {
            this.musicSearchXSM = next;
            console.log('musicSearchXSM', this.musicSearchXSM)
        });

    }



}



