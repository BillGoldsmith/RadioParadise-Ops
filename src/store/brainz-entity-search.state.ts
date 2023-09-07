import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {ZEROUUID} from "../rpapp/rpconstants.const";



export class ResetBrainzEntitySearch{
    static readonly type = '[BrainzEntitySearch] Reset';
    constructor(public partialState: any) {}
}

export class UpdateBrainzEntitySearch{
    static readonly type = '[BrainzEntitySearch] Update';
    constructor(public partialState: any) {}
}


export interface BrainzEntitySearchXSM {
    artist: {
        search: { title: string } | false,
        title: string,
        mbid_artist: string,
        artist_id: number
        list_config: { commandToken: string, hasMore: boolean, list_offset: number }
        list: [],
    };
    release_group:  {
        search: { title: string } | false,
        title: string,
        mbid_release_group: string,
        album_id: number
        list_config: { commandToken: string, hasMore: boolean, list_offset: number }
        list: [],
    };
    release:  {
        search: { title: string } | false,
        title: string,
        mbid_release: string,
        list_config: { commandToken: string, hasMore: boolean, list_offset: number }
        list: [],
    };
    recording:  {
        search: { title: string } | false,
        title: string,
        mbid_recording: string,
        song_id: number,
        list_config: { commandToken: string, hasMore: boolean, list_offset: number }
        list: [],
    };
}

export const brainzEntitySearchStateDefaults: BrainzEntitySearchXSM = {
    artist: {
        search: false,
        title: '',
        mbid_artist: ZEROUUID,
        artist_id: 0,
        list_config: { commandToken: UUID.UUID(), hasMore: true, list_offset: 0 },
        list: [],
    },
    release_group:  {
        search: false,
        title: '',
        mbid_release_group: ZEROUUID,
        album_id: 0,
        list_config: { commandToken: UUID.UUID(), hasMore: true, list_offset: 0 },
        list: [],
    },
    release:  {
        search: false,
        title: '',
        mbid_release: ZEROUUID,
        list_config: { commandToken: UUID.UUID(), hasMore: true, list_offset: 0 },
        list: [],
    },
    recording:  {
        search: false,
        title: '',
        mbid_recording: ZEROUUID,
        song_id: 0,
        list_config: { commandToken: UUID.UUID(), hasMore: true, list_offset: 0 },
        list: [],
    }
};

@State<BrainzEntitySearchXSM>({
    name: 'brainzEntitySearch',
    defaults: brainzEntitySearchStateDefaults
})


@Injectable()
export class BrainzEntitySearchState {
    constructor() {
    }

    @Action(UpdateBrainzEntitySearch)
    update(ctx: StateContext<BrainzEntitySearchXSM>, action: UpdateBrainzEntitySearch) {
        const state = brainzEntitySearchStateDefaults;
        let partialState = action.partialState;
        if (!partialState) {
            partialState = {};
        }
        ctx.setState({
            ...state,
            ...partialState
        });
    }

    @Action(ResetBrainzEntitySearch)
    reset(ctx: StateContext<BrainzEntitySearchXSM>, action: ResetBrainzEntitySearch) {
        const state = ctx.getState();
        let partialState = action.partialState;
        if (!partialState) {
            partialState = {};
        }
        ctx.setState({
            ...state,
            ...partialState
        });
    }



}

