import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MusicSearchXSM} from "../../../../../../store/music-search.state";
import {TableVirtualScrollModule} from "ng-table-virtual-scroll";
import {MatTableModule} from "@angular/material/table";
import {CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";




@Component({
  selector: 'app-widget-music-brainz-list-artist',
  standalone: true,
    imports: [CommonModule, TableVirtualScrollModule, MatTableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll],
  templateUrl: './widget-music-brainz-list-artist.component.html',
  styleUrls: ['./widget-music-brainz-list-artist.component.scss']
})
export class WidgetMusicBrainzListArtistComponent {

    data = [];
    displayedColumns = ['id', 'name', 'desc'];


    @Input() musicSearchXSM: MusicSearchXSM;

    constructor(private elementRef: ElementRef) {
        for(let i = 1; i <= 300; i++) {
            this.data.push({
                id: i,
                name: 'Item ' + i,
                desc: 'Description ' + i
            });
        }



    }


}

