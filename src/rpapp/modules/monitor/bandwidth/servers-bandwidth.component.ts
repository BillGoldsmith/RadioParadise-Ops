import {Component, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CdkScrollable} from "@angular/cdk/overlay";

@Component({
  selector: 'app-servers-bandwidth',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, MatIconModule, RouterLink, MatButtonModule, CdkScrollable],
  templateUrl: './servers-bandwidth.component.html',
  styleUrls: ['./servers-bandwidth.component.scss']
})
export class ServersBandwidthComponent {

    pageData = [

        {
            subdomain: 'audio-0',
            tags: ['stream-fm', 'build-audio manage-mqa', 'audio'],
            links: [],
            datacenter: 'DLS',
            bandwidth: '150TB',
            mrtg_namespace: 'localhost_rename4',
        },
        {
            subdomain: 'audio-1',
            tags: ['build-audio', 'audio'],
            links: [],
            datacenter: 'DLS',
            bandwidth: '150TB',
            mrtg_namespace: 'localhost_eno1',
        },
        {
            subdomain: 'audio-3',
            tags: ['stream', 'build-audio', 'audio', 'strapi', 'sentry'],
            links: [],
            datacenter: 'DLS',
            bandwidth: '150TB',
            mrtg_namespace: 'localhost_eno1',
        },
        {
            subdomain: 'server-6',
            tags: ['web', 'stream', 'shoutcast', 'audio-nomp3'],
            links: [],
            datacenter: 'DLS',
            bandwidth: 'bonded 2gb/s',
            mrtg_namespace: 'localhost_bond0',
        },
        {
            subdomain: 'server-8',
            tags: ['web', 'stream', 'portainer'],
            links: [],
            datacenter: 'DLS',
            bandwidth: '150TB',
            mrtg_namespace: 'localhost_enp2s0',
        },
        {
            subdomain: 'server-9',
            tags: ['web', 'stream', 'misc'],
            links: [],
            datacenter: 'DLS',
            bandwidth: '150TB',
            mrtg_namespace: 'localhost_enp2s0',
        },
        {
            subdomain: 'server-10',
            tags: ['web', 'stream', 'audio-edge'],
            links: [],
            datacenter: 'EU',
            bandwidth: '3Gb/s',
            mrtg_namespace: 'localhost_enp4s0f0',
        },
        {
            subdomain: 'server-12',
            tags: ['web', 'stream', 'audio-edge'],
            links: [],
            datacenter: 'EU',
            bandwidth: '2Gb/s',
            mrtg_namespace: 'localhost_enp1s0f0',
        },
        {
            subdomain: 'server-13',
            tags: ['web', 'stream', 'audio-edge'],
            links: [],
            datacenter: 'SEA',
            bandwidth: '500Mb/s',
            mrtg_namespace: 'localhost_enp1s0f0',
        },
        {
            subdomain: 'server-20',
            tags: ['misc'],
            links: [],
            datacenter: 'SLC',
            bandwidth: '1Gb/s',
            mrtg_namespace: 'localhost_eno4',
        },
        {
            subdomain: 'server-21',
            tags: ['staging'],
            links: [],
            datacenter: 'SLC',
            bandwidth: '10Gb/s 330TB/M',
            mrtg_namespace: 'localhost_enp130s0',
        },
        {
            subdomain: 'api',
            tags: [],
            links: [
                {'label': 'apache', 'url': 'https://api.radioparadise.com/server-status-xny387reds22?refresh=5'},
                {'label': 'php', 'url': 'https://api.radioparadise.com/realtime-status-xny387reds22'},
                {'label': 'php-docs', 'url': 'http://www.idc-online.com/technical_references/pdfs/information_technology/Understanding_the_PHP_FPM_status_page.pdf'},
            ],
            datacenter: 'us-west-2',
            bandwidth: '',
            mrtg_namespace: 'localhost_ens5',
        },
        {
            subdomain: 'legacy',
            tags: [],
            links: [
                {'label': 'apache', 'url': 'https://legacy.radioparadise.com/server-status-xny387reds22?refresh=5'},
            ],
            datacenter: ['us-west-2'],
            bandwidth: '',
            mrtg_namespace: 'localhost_ens5',
        },
        {
            subdomain: 'admin',
            tags: [],
            links: [],
            datacenter: ['us-west-2'],
            bandwidth: '',
            mrtg_namespace: 'localhost_eth0',
        },

    ]


}
