import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    BrainzExplorerBreadtrail, BrainzExplorerNodeType,
    WidgetMusicBrainzExplorerBreadtrailService
} from "../widget-music-brainz-explorer-breadtrail.service";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-widget-music-brainz-explorer-breadtrail',
  standalone: true,
    imports: [CommonModule, MatIconModule],
  templateUrl: './widget-music-brainz-explorer-breadtrail.component.html',
  styleUrls: ['./widget-music-brainz-explorer-breadtrail.component.scss']
})
export class WidgetMusicBrainzExplorerBreadtrailComponent {

    @Input() brainzExplorerBreadtrail: BrainzExplorerBreadtrail;

    constructor(public widgetMusicBrainzExplorerBreadtrailService: WidgetMusicBrainzExplorerBreadtrailService) {
    }

    protected readonly BrainzExplorerNodeType = BrainzExplorerNodeType;
}
