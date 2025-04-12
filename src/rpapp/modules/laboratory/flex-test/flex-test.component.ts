import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountModel} from "../../../core/account/account.model";
import {AccountService} from "../../../core/account/account.service";
import {environment} from "../../../../zenvironments/environment";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {UUID} from "angular2-uuid";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-flex-test',
  standalone: true,
    imports: [CommonModule, MatButtonModule],
  templateUrl: './flex-test.component.html',
  styleUrls: ['./flex-test.component.scss']
})
export class FlexTestComponent {

    account: AccountModel
    protected readonly environment = environment;

    hls_metadata = ''
    startHLSDisabled = false

    /**
     * Constructor
     */
    constructor(
        private http: HttpClient,
        private accountService: AccountService
    )
    {

        this.account = accountService.getAccount();
        console.log('account', this.account)

    }





    async clickStartPlayerHls(){
        this.startHLSDisabled = true;
        const connection = {
            treeUsername: this.account.username,
            leafUserId: this.account.user_id,
            leafAuthToken: this.accountService.getAuthToken(),
            leafSource: 24,
            leafPlayerId: UUID.UUID(),
            leafBranchType: 'default',
            leafBranchChannelId: 0
        }

        let streamUrl = ''
        try {
            const response = await firstValueFrom(this.http.post(environment.FLEX_RELAY + 'client/connect', connection, {withCredentials: true}))
            // @ts-ignore
            streamUrl = response.streamUrl
        }catch (e) {
            console.log('start hls error',e)
            return;
        }


        //const source = data.streamUrl + '/hls.m3u8';
        const source = streamUrl + '/hls.m3u8';
        const audio: HTMLAudioElement = document.querySelector('#player_hls')
        // @ts-ignore
        const player = new window.Plyr(audio)

        // @ts-ignore
        const hls = new window.Hls()


        const that = this
        // @ts-ignore
        hls.on(window.Hls.Events.FRAG_PARSING_METADATA, function(event, data) {
            if (data) {
                that.hls_metadata = data.frag.title;
            }
        });


        // @ts-ignore
        setTimeout( function (){
            hls.loadSource(source);
            hls.attachMedia(audio);
            player.play()
        }, 14000);

    }

    clickStartPlayerStream(){

        const connection = {
            treeUsername: this.account.username,
            leafUserId: this.account.user_id,
            leafAuthToken: this.accountService.getAuthToken(),
            leafSource: 24,
            leafPlayerId: UUID.UUID(),
            leafBranchType: 'default',
            leafBranchChannelId: 0
        }

        this.http.post( environment.FLEX_RELAY + 'client/connect', connection, { withCredentials:true }).subscribe( (data:any) =>{

            const source = data.streamUrl
            const audio: HTMLAudioElement = document.querySelector('#player_stream')
            // @ts-ignore
            const player = new window.Plyr(audio)

            audio.src = source
            player.play()

        })




    }

}
