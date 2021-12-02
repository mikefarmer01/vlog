<template>
  <div>
    <div>
      <FieldSet
        legend="Parameter der Normalverteilung"
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
        </div>
      </FieldSet>
      <FieldSet
        legend="Parameter der exponentiellen Glättung"
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

<script setup>
import InputText from 'primevue/inputtext/sfc'
import FieldSet from 'primevue/fieldset/sfc'

const mean = 30
const std_dev = 2
const alpha = 0.5

</script>
