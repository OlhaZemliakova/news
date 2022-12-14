// import "./main.scss"; // Global CSS has to be imported
import "vuetify/styles";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import router from "./router";
// import vuetify from './plugins/vuetify'
import { loadFonts } from "./plugins/webfontloader";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
}); // Replaces new Vuetify()

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
