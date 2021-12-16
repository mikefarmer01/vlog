<template>
  <DataTable
    id="demandDataTable"
    :value="store.demandData.demandPeriods"
    :paginator="true"
    :rows="12"
  >
    <Column
      field="period"
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

<script setup lang="ts">

import { useStore } from '../../../store'
const store = useStore()

</script>
