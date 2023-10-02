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
    BrainzExplorerBreadtrailNode, WidgetMusicBrainzExplorerBreadtrailService
} from "./widget-music-brainz-explorer-breadtrail.service";
import {
    WidgetMusicBrainzListReleaseGroupComponent
} from "./widget-music-brainz-list-release-group/widget-music-brainz-list-release-group.component";
import {
    WidgetMusicBrainzListReleaseComponent
} from "./widget-music-brainz-list-release/widget-music-brainz-list-release.component";
import {
    WidgetMusicBrainzListRecordingComponent
} from "./widget-music-brainz-list-recording/widget-music-brainz-list-recording.component";
import {
    WidgetMusicBrainzExplorerBreadtrailComponent
} from "./widget-music-brainz-explorer-breadtrail/widget-music-brainz-explorer-breadtrail.component";

@Component({
  selector: 'app-widget-music-brainz-explorer',
  standalone: true,
    imports: [CommonModule, WidgetMusicBrainzListArtistComponent, WidgetMusicBrainzListReleaseGroupComponent, WidgetMusicBrainzListReleaseComponent, WidgetMusicBrainzListRecordingComponent, WidgetMusicBrainzExplorerBreadtrailComponent],
  templateUrl: './widget-music-brainz-explorer.component.html',
  styleUrls: ['./widget-music-brainz-explorer.component.scss']
})
export class WidgetMusicBrainzExplorerComponent implements OnInit{


    @Select(MusicSearchState) musicSearch$: Observable<MusicSearchXSM>;
    musicSearchXSM!: MusicSearchXSM;

    brainzExplorerBreadtrail: BrainzExplorerBreadtrail = new BrainzExplorerBreadtrail();


    constructor(private widgetMusicBrainzExplorerBreadtrailService: WidgetMusicBrainzExplorerBreadtrailService) {

    }

    ngOnInit() {

        this.musicSearch$.subscribe(next => {
            this.musicSearchXSM = next;
            this.brainzExplorerBreadtrail = this.widgetMusicBrainzExplorerBreadtrailService.createFromMusicSearch(this.musicSearchXSM);
            console.log('musicSearchXSM', this.musicSearchXSM)
        });

    }





}



