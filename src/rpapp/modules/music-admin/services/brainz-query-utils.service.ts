import {Injectable} from '@angular/core';
import {QueryUtilsService} from "../../../services/query-utils.service";
import {
    BrainzEntityType,
    BrainzExplorerBreadtrailNode
} from "../widgets/widget-music-brainz-explorer/widget-music-brainz-explorer-breadtrail.service";

@Injectable({
    providedIn: 'root'
})
export class BrainzQueryUtilsService {

    constructor(private queryUtilsService: QueryUtilsService) {
    }

    generateQueryForBreadTrailNode( brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode, offset: number, limit: number ):string{

        let query = '';

        if (brainzExplorerBreadtrailNode.entity === BrainzEntityType.Artist){

            if(brainzExplorerBreadtrailNode.musicSearchXSM){
                const musicSearchXSM = brainzExplorerBreadtrailNode.musicSearchXSM;

                const queryParameters: BrainzEntityQueryParameter[] = [];

                if (musicSearchXSM.artist_id){
                    queryParameters.push( {parameter: 'arid', value:musicSearchXSM.artist_id} );
                }else{
                    queryParameters.push( {parameter: 'artist', value:musicSearchXSM.artist_name} );
                }

                query = new BrainzEntitySearch( BrainzEntityType.Artist, queryParameters).toString(offset, limit);

            }


        }

        return query;
    }


}

export class BrainzEntitySearch{

    entity: string;
    queryParameters: BrainzEntityQueryParameter[];

    constructor(entity: BrainzEntityType, queryParameters: BrainzEntityQueryParameter[]) {
        this.entity = entity;
        this.queryParameters = queryParameters;
    }

    toString(offset: number, limit: number): string{
        let query = '';
        query += this.entity + '/?query=';

        let searchString = ''
        this.queryParameters.forEach( (value, index) => {

            if (index == 0){
                searchString += value.parameter + ":" + value.value;
            }else{
                searchString += ' AND ' + value.parameter + ":" + value.value;
            }
        });

        query += encodeURIComponent(searchString);
        query += "&fmt=json&limit=" + limit + "&offset=" + offset;

        return query;
    }



}

export interface BrainzEntityQueryParameter{
    parameter: string;
    value: string;
}
