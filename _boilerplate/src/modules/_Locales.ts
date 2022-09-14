// Import - I18n Core //
import { createI18n } from 'vue-i18n'
import { IEnv, IMetadataObject } from '@/interfaces/_ICore'

const { VUE_APP_MULTILINGUAL_DEFAULT_LOCALE }: IEnv = process.env

// Dynamic load all translation files based upon folder structure //
const locales = require.context('@/assets/data/translations', true, /[A-Za-z0-9-_,\s]+\.json$/i);
let messages = {} as IMetadataObject;
locales.keys().forEach(key => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i);
  if(matched && matched.length){
    const locale = matched[1];
    messages[locale] = locales(key);
  }
})

// Set default locale file and options //
// Options: https://vue-i18n.intlify.dev/api/general.html#createi18n //
const i18n: any = createI18n({
  locale:VUE_APP_MULTILINGUAL_DEFAULT_LOCALE,
  warnHtmlInMessage: 'off',
  messages
})

export default i18n