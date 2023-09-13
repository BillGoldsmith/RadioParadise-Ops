import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {BrainzExplorerBreadtrailNode} from "../widget-music-brainz-explorer-breadtrail.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {CollectionViewer, DataSource, ListRange} from "@angular/cdk/collections";


@Component({
    selector: 'app-widget-music-brainz-list-artist',
    standalone: true,
    imports: [CommonModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf],
    templateUrl: './widget-music-brainz-list-artist.component.html',
    styleUrls: ['./widget-music-brainz-list-artist.component.scss'],
})
export class WidgetMusicBrainzListArtistComponent {

    @ViewChild(CdkVirtualScrollViewport) viewport?: CdkVirtualScrollViewport;
    @Input() brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode;

    datasource: BrainzExplorerArtistDataSource; // = new MyDataSource();

    constructor() {

        setTimeout(() => {
            this.updateDataSource()
        }, 4000);

    }


    updateDataSource(){
        const ds = new BrainzExplorerArtistDataSource(1000);
        if (this.viewport) ds.setRange(this.viewport.getRenderedRange());
        this.datasource = ds;
        if (this.viewport) this.viewport.scrollToIndex(0);
    }


}

export class BrainzExplorerArtistDataSource extends DataSource<BrainzExplorerArtistRow | undefined> {
    private _length = 20;
    private _pageSize = 20;
    private _cachedData = Array.from<BrainzExplorerArtistRow>({length: this._length});
    private _fetchedPages = new Set<number>();
    private readonly _dataStream = new BehaviorSubject<(BrainzExplorerArtistRow | undefined)[]>(this._cachedData);
    private readonly _subscription = new Subscription();

    constructor(length: number =20) {
        super();
        this._length = length;
        this._cachedData = Array.from<BrainzExplorerArtistRow>({length: this._length});
    }

    connect(collectionViewer: CollectionViewer): Observable<(BrainzExplorerArtistRow | undefined)[]> {
        this._subscription.add(
            collectionViewer.viewChange.subscribe(r => this.setRange(r)),
        );
        return this._dataStream;
    }

    disconnect(): void {
        this._subscription.unsubscribe();
    }

    private _getPageForIndex(index: number): number {
        return Math.floor(index / this._pageSize);
    }

    private _fetchPage(page: number) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);


        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this._cachedData.splice(
                page * this._pageSize,
                this._pageSize,
                ...Array.from({length: this._pageSize}).map((_, i) => ({id: ('x'+i), name: 'h'}) ),
            );
            this._dataStream.next(this._cachedData);
        }, Math.random() * 1000 + 200);


    }

    setRange(range: ListRange): void {
        // console.log('MyDataSource setRange', {range});
        const startPage = this._getPageForIndex(range.start);
        const endPage = this._getPageForIndex(range.end - 1);
        for (let i = startPage; i <= endPage; i++) {
            this._fetchPage(i);
        }
    }


}

export class BrainzExplorerArtistRow {
    id: string = '0';
    name: string = 's';
}
