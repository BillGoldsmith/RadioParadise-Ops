import { Injectable } from '@angular/core';
import {Store} from "@ngxs/store";
import {ActionsBreadcrumb} from "../../../store/breadcrumb.state";

@Injectable({
  providedIn: 'root'
})
export class MusicAdminBreadcrumbService {

  constructor(
      private store: Store
  ) { }

    setForTop(){
        console.log('PAYLOAD setfortop' );
        //this.store.dispatch(new ActionsBreadcrumb.updateMusic([{title: 'search', url: '/music-admin/index'}]) )
        this.store.dispatch(new ActionsBreadcrumb.updateMusic([
            {title: 'search', url: '/music/search'},
            //{title: 'search', url: '/music-admin/index'},
            //{title: 'search', url: '/music-admin/index'},
        ]) )
    }

}
