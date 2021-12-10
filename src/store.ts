import { defineStore } from 'pinia'
import { markRaw } from 'vue'

import { IDemandData, empty, withPeriods } from './DemandData'
import { DemandParams } from './DemandParams'

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
    setDemandParams (demandParams: DemandParams) {
      this.demandParams = demandParams
    },
    setDemandParamMean (mean: number) {
      this.demandParams.mean = mean
    },
    setDemandParamStdDev (std_dev: number) {
      this.demandParams.std_dev = std_dev
    },
    setDemandParamAlpha (alpha: number) {
      this.demandParams.alpha = alpha
    },
    setDemandData (demandData: IDemandData) {
      demandData.demandPeriods = withPeriods(demandData)
      this.demandData = markRaw(demandData)
    },
  }
})
