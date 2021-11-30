import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css'  //Theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

createApp(App).use(PrimeVue).mount("#app");
