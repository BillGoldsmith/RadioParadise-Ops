import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {ZEROUUID} from "../rpapp/rpconstants.const";
import {
    MusicSearchFilterCommands
} from "../rpapp/modules/music-admin/components/music-search-filter/music-search-filter.component";

export namespace ActionsMusicSearchFilter{

    export class update{
        static readonly type = '[MusicSearchFilter] update';
        constructor(public payload: any) {}
    }

    export class reset{
        static readonly type = '[MusicSearchFilter] reset';
        constructor(public payload: any) {}
    }

}




export interface MusicSearchFilterXSM {
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

export const musicSearchFilterStateDefaults: MusicSearchFilterXSM = {
    artist_id: '',
    artist_name: '',
    album_id: '',
    album_name: '',
    release_id: '',
    song_id: '',
    song_name: '',
    command: MusicSearchFilterCommands.reset,
    uuid: '',
};

@State<MusicSearchFilterXSM>({
    name: 'musicSearchFilter',
    defaults: musicSearchFilterStateDefaults
})


@Injectable()
export class MusicSearchFilterState {
    constructor() {
    }

    @Action(ActionsMusicSearchFilter.update)
    update(ctx: StateContext<MusicSearchFilterXSM>, action: ActionsMusicSearchFilter.update) {
        ctx.setState({
            ...action.payload
        });
    }

    @Action(ActionsMusicSearchFilter.reset)
    reset(ctx: StateContext<MusicSearchFilterXSM>, action: ActionsMusicSearchFilter.reset) {
        ctx.setState({
            ...musicSearchFilterStateDefaults,
            uuid: UUID.UUID()
        });
    }



}

