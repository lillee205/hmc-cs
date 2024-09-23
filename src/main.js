import { createApp } from "vue";
// Vuetify
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css' 
import { createVuetify } from "vuetify";
import { createRouter, createWebHistory } from "vue-router";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import HomePage from "./components/HomePage.vue";
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Routing for imitating multiple page app
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/secondpage",
    component: SecondComponent
  }

];

const router = createRouter({
    routes, 
    history: createWebHistory()
});

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark' // Vuetify comes with some default themes. Take this property out, and the default will be light mode. You can also define your own theme, which may be useful if you have a certain color scheme in mind
  }, 
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

import App from "./App.vue";
import SecondComponent from "./components/SecondComponent.vue";

createApp(App).use(vuetify).use(router).mount("#app");
