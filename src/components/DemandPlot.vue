<template>
  <canvas id="demandPlot" />
</template>

<script setup>
const props = defineProps({
    demandData: {
      type: Object,
      default() {
        return {}
      }
    } 
  })
</script>