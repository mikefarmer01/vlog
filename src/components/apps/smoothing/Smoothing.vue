<template>
  <Splitter style="height: 800px">
    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
      <Splitter layout="vertical">
        <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
          <DemandParams />
        </SplitterPanel>
        <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
          <DemandPlot />
        </SplitterPanel>
      </Splitter>
    </SplitterPanel>
    <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
      <DemandData />
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">

import { useStore } from '../../../store'
let store = useStore()

import { RlogHandler } from '../../../RlogHandler'
let rlogHandler = new RlogHandler("demandPlot", [25, 255, 215], [140, 155, 0]);
run();

async function run() {
  await rlogHandler.load()
  await rlogHandler.smooth()
  rlogHandler.plot()
  store.$onAction(paramChangeAction)
}

//TODO: Handle bad params error.
function paramChangeAction({ name , after }) {
  after(async () => {
    switch (name) {
      case 'setDemandParamMean':
      case 'setDemandParamStdDev':
      case 'setDemandParamPeriodCount':
        await rlogHandler.smooth();
        rlogHandler.plot();
        break;
      case 'setDemandParamAlpha':
        await rlogHandler.resmooth();
        rlogHandler.plot();
        break;
    }
  });
}

</script>


<style>
</style>
