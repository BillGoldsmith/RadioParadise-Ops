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
        if (node.brainzExplorerNodeType === BrainzExplorerNodeType.ListArtist ){
            this.brainzExplorerBreadtrail.list_release_group = null;
            this.brainzExplorerBreadtrail.list_release = null;
            this.brainzExplorerBreadtrail.list_recording = null;
        }else if (node.brainzExplorerNodeType === BrainzExplorerNodeType.ListReleaseGroup ){
            this.brainzExplorerBreadtrail.list_release = null;
            this.brainzExplorerBreadtrail.list_recording = null;
        }else if (node.brainzExplorerNodeType === BrainzExplorerNodeType.ListRelease ){
            this.brainzExplorerBreadtrail.list_recording = null;
        }
        return this.brainzExplorerBreadtrail;
    }

    private assignNode(node: BrainzExplorerBreadtrailNode){
        if (node.brainzExplorerNodeType === BrainzExplorerNodeType.ListArtist ){
            this.brainzExplorerBreadtrail.list_artist = node;
        }else if (node.brainzExplorerNodeType === BrainzExplorerNodeType.ListReleaseGroup ){
            this.brainzExplorerBreadtrail.list_release_group = node;
        }else if (node.brainzExplorerNodeType === BrainzExplorerNodeType.ListRelease ){
            this.brainzExplorerBreadtrail.list_release = node;
        }else if (node.brainzExplorerNodeType === BrainzExplorerNodeType.ListRecording ){
            this.brainzExplorerBreadtrail.list_recording = node;
        }
    }


    createFromMusicSearch(musicSearchXSM: MusicSearchXSM): BrainzExplorerBreadtrail{

        const newBreadTrail = new BrainzExplorerBreadtrail();

        if ( musicSearchXSM.command === MusicSearchCommands.reset ){

        }else if ( musicSearchXSM.command === MusicSearchCommands.searchArtist ){

            const node = new BrainzExplorerBreadtrailNode();
            node.musicSearchXSM = musicSearchXSM;
            node.label = musicSearchXSM.command;
            node.brainzExplorerNodeType = BrainzExplorerNodeType.ListArtist;
            node.uuid = musicSearchXSM.uuid;
            newBreadTrail.list_artist = node;

        }else if ( musicSearchXSM.command === MusicSearchCommands.searchAlbum ){

            const node = new BrainzExplorerBreadtrailNode();
            node.musicSearchXSM = musicSearchXSM;
            node.label = musicSearchXSM.command;
            node.brainzExplorerNodeType = BrainzExplorerNodeType.ListReleaseGroup;
            node.uuid = musicSearchXSM.uuid;
            newBreadTrail.list_release = node;

        }else if ( musicSearchXSM.command === MusicSearchCommands.searchSong ){

            const node = new BrainzExplorerBreadtrailNode();
            node.musicSearchXSM = musicSearchXSM;
            node.label = musicSearchXSM.command;
            node.brainzExplorerNodeType = BrainzExplorerNodeType.ListRecording;
            node.uuid = musicSearchXSM.uuid;
            newBreadTrail.list_recording = node;

        }

        this.brainzExplorerBreadtrail = newBreadTrail;
        return this.brainzExplorerBreadtrail;
    }

}



export class BrainzExplorerBreadtrail {
    list_artist: BrainzExplorerBreadtrailNode | null;
    list_release_group: BrainzExplorerBreadtrailNode | null;
    list_release: BrainzExplorerBreadtrailNode | null;
    list_recording: BrainzExplorerBreadtrailNode | null;

    constructor() {
        this.list_artist = null;
        this.list_release_group = null;
        this.list_release = null;
        this.list_recording = null;
    }
}

export class BrainzExplorerBreadtrailNode {
    musicSearchXSM: MusicSearchXSM | null;
    brainzExplorerNodeType: BrainzExplorerNodeType
    brainzId: string;
    label: string;
    uuid: string;
}

export enum BrainzEntityType {
    Artist = 'artist',
    ReleaseGroup = 'release-group',
    Release = 'release',
    Recording = 'recording'
}

export enum BrainzExplorerNodeType {
    ListArtist = 'list_artist',
    ListReleaseGroup = 'list_release_group',
    ListRelease = 'list_release',
    ListRecording = 'list_recording'
}


