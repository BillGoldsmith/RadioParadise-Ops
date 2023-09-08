import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {BreadcrumbModel} from "../model/breadcrumb.model";

export namespace ActionsBreadcrumb{

    export class updateMusic{
        static readonly type = '[Breadcrumb] update music-admin';
        constructor(public payload: any) {}
    }

}


export interface BreadcrumbXSM {
    music: BreadcrumbModel[];
}

export const breadcrumbStateDefaults: BreadcrumbXSM = {
    music: []
};

@State<BreadcrumbXSM>({
    name: 'Breadcrumb',
    defaults: breadcrumbStateDefaults
})


@Injectable()
export class BreadcrumbState {
    constructor() {
    }

    @Action(ActionsBreadcrumb.updateMusic)
    update(ctx: StateContext<BreadcrumbXSM>, action: ActionsBreadcrumb.updateMusic) {
        const state = ctx.getState();
        let payload = action.payload;
        console.log ('PAYLOAD', payload)
        if (!payload) {
            payload = [];
        }
        ctx.setState({
            ...state,
            music: payload
        });
    }


    @Selector()
    static music(state: BreadcrumbXSM) {
        return state.music
    }

}

