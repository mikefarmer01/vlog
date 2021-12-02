<template>
  <DataTable
    id="demandData"
    :value="demand_data.periods"
    :paginator="true"
    :rows="12"
  >
    <Column
      field="ind"
      header="Periode"
    />
    <Column
      field="demand"
      header="Nachfrage"
    />
    <Column
      field="demand_estimated"
      header="Geschätzte Nachfrage"
    />
  </DataTable>
</template>

<script setup>
import DataTable from 'primevue/datatable/sfc'
import Column from 'primevue/column/sfc'

const props = defineProps({
  demand_data: {}
})
</script>
