// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const partials = {

    //API_SERVER: 'http://localdev.radioparadise.com:86/',
    API_SERVER: 'https://api.radioparadise.com/',

    IMAGE_SERVER: 'https://img.radioparadise.com/',

    ADMIN_SERVER: 'https://admin.radioparadise.com/',

    // CONTENT_SERVER : '/rpassets/content/prod/',
    CONTENT_SERVER: '/rpassets/content/testing/',
    // CONTENT_SERVER : 'https://img.radioparadise.com/content/prod/',
    // CONTENT_SERVER : 'https://s3-us-west-2.amazonaws.com/graphics.radioparadise.com/content/testing/',
    RP_BRAINZ_SERVER: 'https://mb.radioparadise.com/',
    BRAINZ_SERVER: 'https://musicbrainz.org/',

    //STRAPI_API_SERVER : 'http://localdev.radioparadise.com:1337/',
    //STRAPI_API_SERVER : 'https://img.radioparadise.com/strapi-data/',
    STRAPI_API_SERVER: 'https://strapi.radioparadise.com/',
    //STRAPI_API_SERVER : 'https://dev-strapi.radioparadise.com/',

    STRAPI_FILE_SERVER: 'https://img.radioparadise.com/strapi-media',
    //STRAPI_FILE_SERVER : 'https://strapi.radioparadise.com',

    CACHE_API_SERVER: 'https://img.radioparadise.com/api-data/api/',
    //CACHE_API_SERVER: 'https://api.radioparadise.com/api/',



};


export const environment = {
    envName: 'testing',
    production: false,
    hmr: false,
    logging: true,

    RPSERVER_SUBMISSION_PLAYER: (partials.API_SERVER + 'site/sections/submissions/submissions_player.php'),
    RPSERVER_IMAGE: partials.IMAGE_SERVER,
    RPSERVER_AVATAR: (partials.IMAGE_SERVER + 'avatars/'),
    RPSERVER_AVATAR_200: (partials.IMAGE_SERVER + 'avatars/200/'),
    RPSERVER_ARTIST: (partials.IMAGE_SERVER + 'artists/'),
    RPSERVER_SITEAPI: (partials.API_SERVER + 'siteapi.php'),
    RPSERVER_ADMINSITEAPI: (partials.ADMIN_SERVER + 'siteapi.php'),
    RPSERVER_API: (partials.API_SERVER + 'api/'),
    RPSERVER_OPI: (partials.API_SERVER + 'opi/'),
    RPSERVER_ROOT: (partials.API_SERVER),

    RPSERVER_CACHE_API: (partials.CACHE_API_SERVER),
    RPSERVER_CONTENT: (partials.CONTENT_SERVER),

    RPSERVER_SUPPORT: 'https://payments.radioparadise.com/',

    STRAPI_API: (partials.STRAPI_API_SERVER + 'api/'),
    STRAPI_FILE: (partials.STRAPI_FILE_SERVER),

    BRAINZ_API: (partials.BRAINZ_SERVER + 'ws/2/'),
    BRAINZ_INDEXED_API: (partials.BRAINZ_SERVER + 'ws/2/'),
    BRAINZ_BROWSE: partials.BRAINZ_SERVER,


    FLEX_RELAY: 'https://local-flex-relay.radioparadise.com/',
    FLEX_API: 'https://local-flex-api.radioparadise.com/',
    FLEX: 'https://local-flex.radioparadise.com/'

};
