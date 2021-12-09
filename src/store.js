import { defineStore } from 'pinia'

import { empty, withPeriods } from '/src/DemandData'

export const useStore = defineStore('store', {
  state: () => ({
    demandParams: {
      mean: 30,
      std_dev: 2,
      period_count: 50,
      alpha: 0.2
    },
    demandData: empty()
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
      demandData.demandPeriods = withPeriods(demandData)
      this.demandData = demandData
    },
  }
})
