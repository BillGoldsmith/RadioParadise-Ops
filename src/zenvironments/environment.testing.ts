const partials = {
  API_SERVER: 'https://api2.radioparadise.com/',
  IMAGE_SERVER: 'https://img.radioparadise.com/',
  ADMIN_SERVER: 'https://admin.radioparadise.com/',
  CONTENT_SERVER: 'https://s3-us-west-2.amazonaws.com/graphics.radioparadise.com/content/testing/',
  RP_BRAINZ_SERVER: 'https://mb.radioparadise.com/',
  BRAINZ_SERVER: 'https://musicbrainz.org/',
  STRAPI_API_SERVER : 'https://strapi.radioparadise.com/',
  STRAPI_FILE_SERVER : 'https://strapi.radioparadise.com',
  CACHE_API_SERVER: 'https://img.radioparadise.com/api-data/api/',
};


export const environment = {
  envName: 'testing',
  production: true,
  hmr: false,
  logging: false,

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
  RPSERVER_CONTENT: (partials.CONTENT_SERVER),
  RPSERVER_SUPPORT: 'https://payments.radioparadise.com/',
  RPSERVER_CACHE_API: (partials.CACHE_API_SERVER),

  STRAPI_API: (partials.STRAPI_API_SERVER + 'api/'),
  STRAPI_FILE: (partials.STRAPI_FILE_SERVER),

  BRAINZ_API: (partials.BRAINZ_SERVER + 'ws/2/'),
  BRAINZ_INDEXED_API: (partials.BRAINZ_SERVER + 'ws/2/'),
  BRAINZ_BROWSE: partials.BRAINZ_SERVER,

};

