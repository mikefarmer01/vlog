<template>
  <div>
    <div>
      <FieldSet
        legend="Parameter der Nachfrage"
        :toggleable="true"
      >
        <div class="formgrid grid">
          <div
            class="field col col-fixed"
            style="width: 200px"
          >
            <label for="paramsMean">Mittlere Nachfrage</label>
            <InputText
              id="paramsMean"
              v-model.number="mean"
              class="inputfield w-full"
            />
          </div>
          <div
            class="field col col-fixed"
            style="width: 200px"
          >
            <label for="paramsStdDev">Standardabweichung</label>
            <InputText
              id="paramsStdDev"
              v-model.number="std_dev"
              class="inputfield w-full"
            />
          </div>
          <div
            class="field col col-fixed"
            style="width: 200px"
          >
            <label for="paramsPeriodCount">Periodenzahl</label>
            <InputText
              id="paramsPeriodCount"
              v-model.number="period_count"
              class="inputfield w-full"
            />
          </div>
        </div>
      </FieldSet>
      <FieldSet
        legend="Parameter der Nachfrageprognose"
        :toggleable="true"
      >
        <div class="formgrid grid">
          <div
            class="field col col-fixed"
            style="width: 100px"
          >
            <label for="paramsAlpha">Alpha</label>
            <InputText
              id="paramsAlpha"
              v-model.number="alpha"
              class="inputfield w-full"
            />
          </div>
        </div>
      </FieldSet>
    </div>
    <div />
  </div>
</template>

<script setup lang="ts">

//TODO: BUUUUG
import FieldSet from 'primevue/fieldset/sfc'
import { computed } from 'vue'

import { useStore } from '../../../store'
const store = useStore()

//#region Computed properties
const mean = computed({
  get: () => store.demandParams.mean,
  set: (val: number) => {
    store.setDemandParamMean(val)
  }
})
const std_dev = computed({
  get: () => store.demandParams.std_dev,
  set: (val: number) => {
    store.setDemandParamStdDev(val)
  }
})
const period_count = computed({
  get: () => store.demandParams.period_count,
  set: (val: number) => {
    store.setDemandParamPeriodCount(val)
  }
})
const alpha = computed({
  get: () => store.demandParams.alpha,
  set: (val: number) => {
    store.setDemandParamAlpha(val)
  }
})
//#endregion

</script>
