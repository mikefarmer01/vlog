<template>
  <div class="demand-data">
    <table id="demandsTable">
      <thead>
        <tr>
          <th>Periode</th>
          <th>Nachfrage</th>
          <th>Vorhergesagte Nachfrage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in demand_data.periods" v-bind:key="p">
          <td>{{ p.ind }}</td>
          <td>{{ p.demand }}</td>
          <td>{{ p.demand_estimated }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DemandData",
  props: ['demand_data']
};
</script>