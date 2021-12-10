import { createApp } from 'vue'
import App from './App.vue'

// #region: PrimeVue and Co.
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css' // Theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons
// #endregion.

import { createPinia } from 'pinia'
createApp(App).use(createPinia()).use(PrimeVue).mount('#app')
