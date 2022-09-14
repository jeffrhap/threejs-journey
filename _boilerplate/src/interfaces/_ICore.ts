export interface IEnv {
  VUE_APP_ENV_TYPE: string,
  VUE_APP_GTM_ID?: string,
  VUE_APP_SENTRY_DSN?: string,
  VUE_APP_IS_MULTILINGUAL?: string,
  VUE_APP_HAS_MULTILINGUAL_URL?: string,
  VUE_APP_MULTILINGUAL_DEFAULT_LOCALE?: string,
  VUE_APP_MULTILINGUAL_SUPPORTED_LOCALE?: string
}

export interface IMetadataObject {
  [key: string]: any
}