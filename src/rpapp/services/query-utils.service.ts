import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QueryUtilsService {

    constructor() {
    }


    escapeQuery(query: string): string {
        return encodeURIComponent(query);
    }



}
