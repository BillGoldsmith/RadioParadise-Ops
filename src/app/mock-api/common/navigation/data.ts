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
            }
        ]
    },
    {
        id   : 'tools',
        title: 'Tools',
        type : 'aside',
        icon : 'heroicons_outline:wrench-screwdriver',
        children: [
            {
                id   : 'cache-invalidation',
                title: 'Cache Invalidation',
                type : 'basic',
                icon : 'heroicons_outline:arrow-path',
                link : '/example'
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
                        link : '/example'
                    },
                    {
                        id   : 'test-cache-history',
                        title: 'Test cache history',
                        type : 'basic',
                        link : '/example'
                    },
                    {
                        id   : 'test-promos',
                        title: 'Test scheduled promos',
                        type : 'basic',
                        link : '/example'
                    }
                ]
            },
            {
                id   : 'cover-art',
                title: 'Cover Art',
                type : 'basic',
                icon : 'heroicons_outline:square-2-stack',
                link : '/example'
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
                link : '/example'
            },
            {
                id   : 'strapi',
                title: 'Strapi',
                type : 'basic',
                icon : 'heroicons_outline:map',
                link : '/example'
            }
        ]
    },
    {
        id   : 'music',
        title: 'music',
        type : 'aside',
        icon : 'heroicons_outline:musical-note',
        children: [
            {
                id   : 'search',
                title: 'Search',
                type : 'basic',
                link : '/example'
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
        id   : 'ccounts',
        title: 'Accounts',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/example'
    },

];
export const compactNavigation: FuseNavigationItem[] = defaultNavigation;
export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;
export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;
