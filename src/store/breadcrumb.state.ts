import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";

namespace ActionsBreadcrumb{

    export class updateMusic{
        static readonly type = '[Breadcrumb] update music';
        constructor(public payload: any) {}
    }

}


export interface BreadcrumbXSM {
    music: [];
}

export const breadcrumbStateDefaults: BreadcrumbXSM = {
    music: []
};

@State<BreadcrumbXSM>({
    name: 'Breadcrumb',
    defaults: breadcrumbStateDefaults
})


@Injectable()
export class BrainzEntitySearchState {
    constructor() {
    }

    @Action(ActionsBreadcrumb.updateMusic)
    update(ctx: StateContext<BreadcrumbXSM>, action: ActionsBreadcrumb.updateMusic) {
        const state = ctx.getState();
        let payload = action.payload;
        if (!payload) {
            payload = [];
        }
        ctx.setState({
            ...state,
            music: payload
        });
    }


}

