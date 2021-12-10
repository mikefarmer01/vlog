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
              v-model.number="store.demandParams.mean"
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
              v-model.number="store.demandParams.std_dev"
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
              v-model.number="store.demandParams.period_count"
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
              v-model.number="store.demandParams.alpha"
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

import { useStore } from '../store'
const store = useStore()

</script>
