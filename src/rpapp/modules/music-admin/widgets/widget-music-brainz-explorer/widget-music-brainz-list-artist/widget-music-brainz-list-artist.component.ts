import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {BrainzExplorerBreadtrailNode} from "../widget-music-brainz-explorer-breadtrail.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";


@Component({
    selector: 'app-widget-music-brainz-list-artist',
    standalone: true,
    imports: [CommonModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf],
    templateUrl: './widget-music-brainz-list-artist.component.html',
    styleUrls: ['./widget-music-brainz-list-artist.component.scss'],
})
export class WidgetMusicBrainzListArtistComponent {


    @Input() brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode;

    datasource: BrainzExplorerArtistDataSource<BrainzExplorerArtistRow>;
    resettingDatasource = false;  // needed for cdk bug.  https://github.com/angular/components/issues/22464

    constructor() {

        this.datasource = new BrainzExplorerArtistDataSource<BrainzExplorerArtistRow>(this.brainzExplorerBreadtrailNode);

        setTimeout( () => {this.resettingDatasource = true}, 4000);

        setTimeout( () => {
            this.datasource = new BrainzExplorerArtistDataSource<BrainzExplorerArtistRow>(this.brainzExplorerBreadtrailNode);
            this.resettingDatasource = false;
        }, 8000);
    }


}

export class BrainzExplorerArtistDataSource<T> extends DataSource<T | undefined> {
    private _length = 1;
    private _pageSize = 25;
    private _cachedData = Array.from<T>({length: this._length});
    private _fetchedPages = new Set<number>();
    private readonly _dataStream = new BehaviorSubject<(T | undefined)[]>(this._cachedData);
    private readonly _subscription = new Subscription();

    initialized = false;
    brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode;


    constructor(brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode) {
        super();
        this.brainzExplorerBreadtrailNode = brainzExplorerBreadtrailNode;
    }

    initialize(length: number) {
        if (this.initialized) {
            return;
        }

        this._length = length;
        this._cachedData = Array.from<T>({length: this._length});
        this.initialized = true;
    }

    connect(collectionViewer: CollectionViewer): Observable<(T | undefined)[]> {
        this._subscription.add(
            collectionViewer.viewChange.subscribe(range => {
                const startPage = this._getPageForIndex(range.start);
                const endPage = this._getPageForIndex(range.end - 1);
                for (let i = startPage; i <= endPage; i++) {
                    this._fetchPage(i);
                }
            }),
        );
        return this._dataStream;
    }

    disconnect(): void {
        this._subscription.unsubscribe();
    }

    private _getPageForIndex(index: number): number {
        return Math.floor(index / this._pageSize);
    }

    private _fetchPage(page: number, initialize = false) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);


        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {

            if (!this.initialized) {
                this.initialize(500);
            }


            this._cachedData.splice(
                page * this._pageSize,
                this._pageSize,
                ...Array.from({length: this._pageSize}).map((_, i) => ({
                    id: ('x' + (page * this._pageSize + i)),
                    name: 'h'
                } as T)),
            );
            this._dataStream.next(this._cachedData);
        }, Math.random() * 1000 + 200);


    }


}

export class BrainzExplorerArtistRow {
    id: string = '0';
    name: string = 's';
}
