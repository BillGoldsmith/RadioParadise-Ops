import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {ZEROUUID} from "../rpapp/rpconstants.const";
import {
    MusicSearchCommands
} from "../rpapp/modules/music-admin/widgets/widget-music-search/widget-music-search.component";

export namespace ActionsMusicSearch{

    export class update{
        static readonly type = '[MusicSearchFilter] update';
        constructor(public payload: any) {}
    }

    export class reset{
        static readonly type = '[MusicSearchFilter] reset';
        constructor() {}
    }

}


export interface MusicSearchXSM {
    artist_id: string,
    artist_name: string,
    album_id: string,
    album_name: string,
    release_id: string,
    song_id: string,
    song_name: string,
    command: string,
    uuid: string,
}

export const musicSearchStateDefaults: MusicSearchXSM = {
    artist_id: '',
    artist_name: '',
    album_id: '',
    album_name: '',
    release_id: '',
    song_id: '',
    song_name: '',
    command: MusicSearchCommands.reset,
    uuid: '',
};

@State<MusicSearchXSM>({
    name: 'musicSearch',
    defaults: musicSearchStateDefaults
})


@Injectable()
export class MusicSearchState {
    constructor() {
    }

    @Action(ActionsMusicSearch.update)
    update(ctx: StateContext<MusicSearchXSM>, action: ActionsMusicSearch.update) {
        ctx.setState({
            ...action.payload
        });
    }

    @Action(ActionsMusicSearch.reset)
    reset(ctx: StateContext<MusicSearchXSM>, action: ActionsMusicSearch.reset) {
        ctx.setState({
            ...musicSearchStateDefaults,
            uuid: UUID.UUID()
        });
    }



}

