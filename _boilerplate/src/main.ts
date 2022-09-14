// Import - Vue Core //
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/_Default";
import { createPinia } from "pinia";

// Import - Interfaces //
import { IEnv } from "./interfaces/_ICore";

// Import - Vue Plugins //
import axios from "axios"; // Docs: https://axios-http.com/docs/intro //
import VueAxios from "vue-axios"; // Docs: https://www.npmjs.com/package/vue-axios //
import { createGtm } from "vue-gtm"; // Docs: https://www.npmjs.com/package/vue-gtm //
import * as Sentry from "@sentry/vue"; // Docs: https://docs.sentry.io/platforms/javascript/guides/vue //
import { BrowserTracing } from "@sentry/tracing";
import i18n from "@/modules/_Locales"; // Docs: https://vue-i18n.intlify.dev //

// Import - Vue Global Components //

// Environment - Variables //
const {
  VUE_APP_GTM_ID,
  VUE_APP_SENTRY_DSN,
  VUE_APP_IS_MULTILINGUAL,
  VUE_APP_HAS_MULTILINGUAL_URL,
  VUE_APP_ENV_TYPE,
}: IEnv = process.env;

// Vue - Initiation //
const app = createApp(App);
app.use(createPinia());

// Vue - Multilangual //
if (VUE_APP_IS_MULTILINGUAL === "true") {
  app.use(i18n);
}

app.use(router);

// Vue - Google Tag Manager //
if (VUE_APP_GTM_ID) {
  app.use(
    createGtm({
      id: VUE_APP_GTM_ID,
      debug: VUE_APP_ENV_TYPE === "development",
    })
  );
}

// Vue - Sentry JavaScript error logging //
if (VUE_APP_SENTRY_DSN && VUE_APP_ENV_TYPE !== "development") {
  Sentry.init({
    app,
    dsn: VUE_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1,
  });

  app.config.errorHandler = (err, _, info) => {
    Sentry.setTag("info", info);
    Sentry.captureException(err);
    console.error(err);
  };
}

// Vue - Plugins //
app.use(VueAxios, axios);

// Vue - Global Components //

// Vue - Set root component //
app.mount("#app");
