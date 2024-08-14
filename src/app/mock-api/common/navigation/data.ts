/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'monitor',
        title: 'Monitor',
        type : 'aside',
        icon : 'heroicons_outline:chart-bar-square',
        children: [
            {
                id   : 'bandwidth',
                title: 'Bandwidth',
                type : 'basic',
                link : '/monitor/bandwidth'
            },
            {
                id   : 'stream-sync-status',
                title: 'Stream Sync',
                type : 'basic',
                link : '/monitor/stream-sync-status'
            },
            {
                id   : 'server-health',
                title: 'Server Health',
                type : 'basic',
                link : '/monitor/server-health'
            }
        ]
    },
    {
        id   : 'toolbox',
        title: 'Toolbox',
        type : 'aside',
        icon : 'heroicons_outline:wrench-screwdriver',
        children: [
            {
                id   : 'cache-invalidation',
                title: 'Cache Invalidation',
                type : 'basic',
                icon : 'heroicons_outline:arrow-path',
                link : '/toolbox/cache-invalidation'
            },
            {
                id   : 'playlists',
                title: 'Playlists',
                type : 'collapsable',
                icon : 'heroicons_outline:table-cells',
                children: [
                    {
                        id   : 'test-live',
                        title: 'Test live',
                        type : 'basic',
                        link : '/toolbox/playlists/test-live'
                    },
                    {
                        id   : 'test-cache-history',
                        title: 'Test cache history',
                        type : 'basic',
                        link : '/toolbox/playlists/test-cache-history'
                    },
                    {
                        id   : 'test-promos',
                        title: 'Test scheduled promos',
                        type : 'basic',
                        link : '/toolbox/playlists/test-scheduled-promos'
                    }
                ]
            },
            {
                id   : 'cover-art',
                title: 'Test Cover Art',
                type : 'basic',
                icon : 'heroicons_outline:square-2-stack',
                link : '/toolbox/test-cover-art'
            }
        ]
    },
    {
        id   : 'documentation',
        title: 'Docs',
        type : 'aside',
        icon : 'heroicons_outline:book-open',
        children: [
            {
                id   : 'links',
                title: 'Links',
                type : 'basic',
                icon : 'heroicons_outline:link',
                link : '/docs/links'
            },
            {
                id   : 'strapi',
                title: 'Strapi',
                type : 'basic',
                icon : 'heroicons_outline:map',
                link : '/docs/strapi'
            }
        ]
    },
    {
        id   : 'accounts',
        title: 'Accounts',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/accounts/index'
    },
    {
        id   : 'music-admin',
        title: 'Music',
        type : 'aside',
        icon : 'heroicons_outline:musical-note',
        children: [
            {
                id   : 'search',
                title: 'Search',
                type : 'basic',
                link : '/music/search'
            },
            {
                id   : 'reports',
                title: 'Reports',
                type : 'basic',
                link : '/example'
            },
            {
                id   : 'curate',
                title: 'Curate',
                type : 'basic',
                link : '/example'
            }
        ]
    },
    {
        id   : 'reports',
        title: 'Reports',
        type : 'aside',
        icon : 'heroicons_outline:presentation-chart-line',
        children: [
            {
                id   : 'clients',
                title: 'Clients',
                type : 'basic',
                link : '/reports/clients'
            },
            {
                id   : 'channels clients',
                title: 'Channels Clients',
                type : 'basic',
                link : '/reports/channels-clients'
            },
            {
                id   : 'channels streams',
                title: 'Channels Streams',
                type : 'basic',
                link : '/reports/channels-streams'
            },
            {
                id   : 'accounts-active',
                title: 'Accounts Active',
                type : 'basic',
                link : '/reports/accounts-active'
            },
            {
                id   : 'accounts-recent',
                title: 'Accounts Recent',
                type : 'basic',
                link : '/reports/accounts-recent'
            },
            {
                id   : 'automotive-languages',
                title: 'Automotive Languages',
                type : 'basic',
                link : '/reports/automotive-languages'
            }
        ]
    },


];
export const compactNavigation: FuseNavigationItem[] = defaultNavigation;
export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;
export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;
