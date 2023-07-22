/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'bandwidth',
        title: 'Bandwidth',
        type : 'basic',
        icon : 'heroicons_outline:server-stack',
        link : '/example'
    },
    {
        id   : 'services',
        title: 'Services',
        type : 'aside',
        icon : 'heroicons_outline:circle-stack',
        children: [
            {
                id   : 'radio-streams',
                title: 'Radio Streams',
                type : 'basic',
                icon : 'heroicons_outline:musical-note',
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
                id   : 'cache-invalidation',
                title: 'Cache Invalidation',
                type : 'basic',
                icon : 'heroicons_outline:arrow-path',
                link : '/example'
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
        title: 'Documentation',
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

];
export const compactNavigation: FuseNavigationItem[] = defaultNavigation;
export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;
export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;
