<template>
  <div>
    <div>
      <FieldSet legend="Parameter der Normalverteilung" :toggleable="true">
        <div class="formgrid grid">
          <div class="field col col-fixed" style="width: 200px">
            <label for="paramsMean">Mittlere Nachfrage</label>
            <InputText v-model.number="mean" id="paramsMean" class="inputfield w-full"/>
          </div>
          <div class="field col col-fixed" style="width: 200px">
            <label for="paramsStdDev">Standardabweichung</label>
            <InputText v-model.number="std_dev" id="paramsStdDev" class="inputfield w-full"/>
          </div>
        </div>
      </FieldSet>
      <FieldSet legend="Parameter der exponentiellen Glättung" :toggleable="true">
        <div class="formgrid grid">
          <div class="field col col-fixed" style="width: 100px">
            <label for="paramsAlpha">Alpha</label>
            <InputText v-model.number="alpha" id="paramsAlpha" class="inputfield w-full"/>
          </div>
        </div>
      </FieldSet>
    </div>
    <div></div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext/sfc';
import FieldSet from 'primevue/fieldset/sfc';
export default {
  name: "DemandParams",
  data() {
    return {
      mean: 30,
      std_dev: 2,
      alpha: 0.5
    }
  },
  components: {
    InputText, FieldSet
  }
};
</script>

<style scoped>
</style>