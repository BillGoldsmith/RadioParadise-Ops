import {Injectable} from '@angular/core';
import {MusicSearchXSM} from "../../../../../store/music-search.state";
import {MusicSearchCommands} from "../widget-music-search/widget-music-search.component";

@Injectable({
    providedIn: 'root'
})
export class WidgetMusicBrainzExplorerBreadtrailService {

    brainzExplorerBreadtrail: BrainzExplorerBreadtrail = new BrainzExplorerBreadtrail();

    constructor() {
    }

    startBreadTrailFromNode(node: BrainzExplorerBreadtrailNode): BrainzExplorerBreadtrail {
        this.brainzExplorerBreadtrail = new BrainzExplorerBreadtrail();
        this.assignNode(node);
        return this.brainzExplorerBreadtrail;
    }

    applyNode(node: BrainzExplorerBreadtrailNode): BrainzExplorerBreadtrail {
        this.assignNode(node);
        return this.brainzExplorerBreadtrail;
    }

    trimBreadtrail(node: BrainzExplorerBreadtrailNode ): BrainzExplorerBreadtrail{
        if (node.entity === BrainzEntityType.Artist ){
            this.brainzExplorerBreadtrail.release_group = null;
            this.brainzExplorerBreadtrail.release = null;
            this.brainzExplorerBreadtrail.recording = null;
        }else if (node.entity === BrainzEntityType.ReleaseGroup ){
            this.brainzExplorerBreadtrail.release = null;
            this.brainzExplorerBreadtrail.recording = null;
        }else if (node.entity === BrainzEntityType.Release ){
            this.brainzExplorerBreadtrail.recording = null;
        }
        return this.brainzExplorerBreadtrail;
    }

    private assignNode(node: BrainzExplorerBreadtrailNode){
        if (node.entity === BrainzEntityType.Artist ){
            this.brainzExplorerBreadtrail.artist = node;
        }else if (node.entity === BrainzEntityType.ReleaseGroup ){
            this.brainzExplorerBreadtrail.release_group = node;
        }else if (node.entity === BrainzEntityType.Release ){
            this.brainzExplorerBreadtrail.release = node;
        }else if (node.entity === BrainzEntityType.Recording ){
            this.brainzExplorerBreadtrail.recording = node;
        }
    }


    createFromMusicSearch(musicSearchXSM: MusicSearchXSM): BrainzExplorerBreadtrail{

        const newBreadTrail = new BrainzExplorerBreadtrail();

        if ( musicSearchXSM.command === MusicSearchCommands.reset ){

        }else if ( musicSearchXSM.command === MusicSearchCommands.searchArtist ){

            const node = new BrainzExplorerBreadtrailNode();
            node.musicSearchXSM = musicSearchXSM;
            node.label = musicSearchXSM.command;
            node.entity = BrainzEntityType.Artist;
            node.uuid = musicSearchXSM.uuid;
            newBreadTrail.artist = node;

        }else if ( musicSearchXSM.command === MusicSearchCommands.searchAlbum ){

            const node = new BrainzExplorerBreadtrailNode();
            node.musicSearchXSM = musicSearchXSM;
            node.label = musicSearchXSM.command;
            node.entity = BrainzEntityType.ReleaseGroup;
            node.uuid = musicSearchXSM.uuid;
            newBreadTrail.release = node;

        }else if ( musicSearchXSM.command === MusicSearchCommands.searchSong ){

            const node = new BrainzExplorerBreadtrailNode();
            node.musicSearchXSM = musicSearchXSM;
            node.label = musicSearchXSM.command;
            node.entity = BrainzEntityType.Recording;
            node.uuid = musicSearchXSM.uuid;
            newBreadTrail.recording = node;

        }

        this.brainzExplorerBreadtrail = newBreadTrail;
        return this.brainzExplorerBreadtrail;
    }



}



export class BrainzExplorerBreadtrail {
    artist: BrainzExplorerBreadtrailNode | null;
    release_group: BrainzExplorerBreadtrailNode | null;
    release: BrainzExplorerBreadtrailNode | null;
    recording: BrainzExplorerBreadtrailNode | null;

    constructor() {
        this.artist = null;
        this.release_group = null;
        this.release = null;
        this.recording = null;
    }
}

export class BrainzExplorerBreadtrailNode {
    musicSearchXSM: MusicSearchXSM | null;
    entity: BrainzEntityType;
    brainzId: string;
    label: string;
    uuid: string;
}

export enum BrainzEntityType {
    Artist = 'artist',
    ReleaseGroup = 'release_group',
    Release = 'release',
    Recording = 'recording'
}
