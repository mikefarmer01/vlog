import { createApp } from 'vue'
import App from './App.vue'

// #region: PrimeVue and Co.
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css' // Theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons
// #endregion.

// #region Pinia store
import { createPinia, defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    demandParams: {
      mean: 30,
      std_dev: 2,
      period_count: 50,
      alpha: 0.2
    },
    demandData: {}
  }),
  actions: {
    setDemandParams (demandParams) {
      this.demandParams = demandParams
    },
    setDemandParamMean (mean) {
      this.demandParams.mean = mean
    },
    setDemandParamStdDev (std_dev) {
      this.demandParams.std_dev = std_dev
    },
    setDemandParamAlpha (alpha) {
      this.demandParams.alpha = alpha
    },
    setDemandData (demandData) {
      this.demandData = demandData
    }
  }
})
// #endregion.

createApp(App).use(createPinia()).use(PrimeVue).mount('#app')
