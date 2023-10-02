import {Injectable} from '@angular/core';
import {QueryUtilsService} from "../../../services/query-utils.service";
import {
    BrainzEntityType,
    BrainzExplorerBreadtrailNode,
    BrainzExplorerNodeType
} from "../widgets/widget-music-brainz-explorer/widget-music-brainz-explorer-breadtrail.service";

@Injectable({
    providedIn: 'root'
})
export class BrainzQueryUtilsService {

    constructor(private queryUtilsService: QueryUtilsService) {
    }

    generateQueryForBreadTrailNode( brainzExplorerBreadtrailNode: BrainzExplorerBreadtrailNode, offset: number, limit: number ):string{

        let query = '';

        if (brainzExplorerBreadtrailNode.brainzExplorerNodeType === BrainzExplorerNodeType.ListArtist){

            const queryParameters: BrainzEntityQueryParameter[] = [];

            if(brainzExplorerBreadtrailNode.musicSearchXSM){
                const musicSearchXSM = brainzExplorerBreadtrailNode.musicSearchXSM;

                if (musicSearchXSM.artist_id){
                    queryParameters.push( {parameter: 'arid', value:musicSearchXSM.artist_id} );
                }else{
                    queryParameters.push( {parameter: 'artist', value:musicSearchXSM.artist_name} );
                }

            }else{
                queryParameters.push( {parameter: 'arid', value:brainzExplorerBreadtrailNode.brainzId} );
            }
            query = new BrainzEntitySearch( BrainzEntityType.Artist, queryParameters).toString(offset, limit);


        }else if ( brainzExplorerBreadtrailNode.brainzExplorerNodeType === BrainzExplorerNodeType.ListReleaseGroup ){

            const queryParameters: BrainzEntityQueryParameter[] = [];

            if(brainzExplorerBreadtrailNode.musicSearchXSM){
                const musicSearchXSM = brainzExplorerBreadtrailNode.musicSearchXSM;

                if (musicSearchXSM.artist_id){
                    queryParameters.push( {parameter: 'arid', value:musicSearchXSM.artist_id} );
                }else {
                    if (musicSearchXSM.artist_name) {
                        queryParameters.push({parameter: 'artist', value: musicSearchXSM.artist_name});
                    }
                }

                if (musicSearchXSM.album_id){
                    queryParameters.push( {parameter: 'rgid', value:musicSearchXSM.album_id} );
                }else{
                    if (musicSearchXSM.album_name) {
                        queryParameters.push({parameter: 'releasegroup', value: musicSearchXSM.album_name});
                    }
                }
            }else{
                queryParameters.push( {parameter: 'arid', value:brainzExplorerBreadtrailNode.brainzId} );
            }

            queryParameters.push( {parameter: 'status', value:'official'} );
            query = new BrainzEntitySearch( BrainzEntityType.ReleaseGroup, queryParameters).toString(offset, limit);

        }else if ( brainzExplorerBreadtrailNode.brainzExplorerNodeType === BrainzExplorerNodeType.ListRelease ){

            const queryParameters: BrainzEntityQueryParameter[] = [];
            queryParameters.push( {parameter: 'rgid', value:brainzExplorerBreadtrailNode.brainzId} );
            queryParameters.push( {parameter: 'status', value:'official'} );
            query = new BrainzEntitySearch( BrainzEntityType.Release, queryParameters).toString(offset, limit);

        }else if ( brainzExplorerBreadtrailNode.brainzExplorerNodeType === BrainzExplorerNodeType.ListRecording ){

            const queryParameters: BrainzEntityQueryParameter[] = [];

            if(brainzExplorerBreadtrailNode.musicSearchXSM){
                const musicSearchXSM = brainzExplorerBreadtrailNode.musicSearchXSM;

                if (musicSearchXSM.artist_id){
                    queryParameters.push( {parameter: 'arid', value:musicSearchXSM.artist_id} );
                }else {
                    if (musicSearchXSM.artist_name) {
                        queryParameters.push({parameter: 'artist', value: musicSearchXSM.artist_name});
                    }
                }

                if (musicSearchXSM.album_id){
                    queryParameters.push( {parameter: 'rgid', value:musicSearchXSM.album_id} );
                }else{
                    if (musicSearchXSM.album_name) {
                        queryParameters.push({parameter: 'release', value: musicSearchXSM.album_name});
                    }
                }

                if (musicSearchXSM.release_id){
                    queryParameters.push( {parameter: 'reid', value:musicSearchXSM.release_id} );
                }

                if (musicSearchXSM.song_name){
                    queryParameters.push( {parameter: 'recording', value:musicSearchXSM.song_name} );
                }

            }else{
                queryParameters.push( {parameter: 'reid', value:brainzExplorerBreadtrailNode.brainzId} );
            }

            query = new BrainzEntitySearch( BrainzEntityType.Recording, queryParameters).toString(offset, limit);

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
