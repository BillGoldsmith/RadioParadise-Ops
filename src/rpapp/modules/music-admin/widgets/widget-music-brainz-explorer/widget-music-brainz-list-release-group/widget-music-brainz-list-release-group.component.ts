import {Component, Input, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {MatButtonModule} from "@angular/material/button";
import {
    BrainzExplorerBreadtrailNode, BrainzExplorerNodeType,
    WidgetMusicBrainzExplorerBreadtrailService
} from "../widget-music-brainz-explorer-breadtrail.service";
import {HttpClient} from "@angular/common/http";
import {BrainzQueryUtilsService} from "../../../services/brainz-query-utils.service";
import {QueryUtilsService} from "../../../../../services/query-utils.service";
import {UUID} from "angular2-uuid";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {environment} from "../../../../../../zenvironments/environment";

@Component({
  selector: 'app-widget-music-brainz-list-release-group',
  standalone: true,
    imports: [CommonModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, MatButtonModule],
  templateUrl: './widget-music-brainz-list-release-group.component.html',
  styleUrls: ['./widget-music-brainz-list-release-group.component.scss']
})

export class WidgetMusicBrainzListReleaseGroupComponent {

    @Input() brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode;

    datasource: BrainzExplorerReleaseGroupDataSource<BrainzExplorerReleaseGroupRow>;
    resettingDatasource = false;  // needed for cdk bug.  https://github.com/angular/components/issues/22464

    constructor(private http: HttpClient,
                private brainzQueryUtilsService: BrainzQueryUtilsService,
                private queryUtilsService: QueryUtilsService,
                private widgetMusicBrainzExplorerBreadtrailService: WidgetMusicBrainzExplorerBreadtrailService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
        this.resettingDatasource = true;
        this.datasource = new BrainzExplorerReleaseGroupDataSource<BrainzExplorerReleaseGroupRow>(
            this.brainzExplorerBreadtrailNode,
            this.http,
            this.queryUtilsService,
            this.brainzQueryUtilsService
        );
        setTimeout( () => {
            this.resettingDatasource = false;
            console.log('new breadnode list release_group', this.brainzExplorerBreadtrailNode);
        },1000) ;

    }


    clickReleaseGroup(item){
        console.log('item', item);
        const node = new BrainzExplorerBreadtrailNode();
        node.brainzExplorerNodeType = BrainzExplorerNodeType.ListRelease;
        node.brainzId = item.id;
        node.label = item.name;
        node.uuid = UUID.UUID();
        this.widgetMusicBrainzExplorerBreadtrailService.applyNode(node)
    }




}



export class BrainzExplorerReleaseGroupDataSource<T> extends DataSource<T | undefined> {
    private _length = 1;
    private _pageSize = 25;
    private _cachedData = Array.from<T>({length: this._length});
    private _fetchedPages = new Set<number>();
    private readonly _dataStream = new BehaviorSubject<(T | undefined)[]>(this._cachedData);
    private readonly _subscription = new Subscription();

    initialized = false;
    brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode;
    private http: HttpClient;
    private queryUtilsService: QueryUtilsService;
    private brainzQueryUtilsService: BrainzQueryUtilsService;

    constructor(
        brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode,
        http: HttpClient,
        queryUtilsService: QueryUtilsService,
        brainzQueryUtilsService: BrainzQueryUtilsService
    ) {
        super();
        this.brainzExplorerBreadtrailNode = brainzExplorerBreadtrailNode;
        this.http = http;
        this.queryUtilsService = queryUtilsService;
        this.brainzQueryUtilsService = brainzQueryUtilsService;
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

        const offset = this._pageSize * page;
        const query = this.brainzQueryUtilsService.generateQueryForBreadTrailNode(this.brainzExplorerBreadtrailNode, offset, this._pageSize);

        this.http.get(environment.BRAINZ_API + query, {responseType: 'json'}).subscribe( (data: any) =>{

            if (!this.initialized) {
                this.initialize(data.count);
            }

            const returnedLength = data['release-groups'].length;

            this._cachedData.splice(
                page * this._pageSize,
                returnedLength,
                ...data['release-groups'] as T[],
            );

            this._dataStream.next(this._cachedData);

            console.log('fetch page', data);


        });

        /*
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
        */

    }


}

export interface BrainzExplorerReleaseGroupRow {
    id: string;
    name: string;
}





