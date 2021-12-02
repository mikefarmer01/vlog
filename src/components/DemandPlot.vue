<template>
  <canvas id="demandPlot" />
</template>

<script>
export default {
  name: 'DemandPlot',
  props: {
    demandData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
</style>
