<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
        <td>{{ p.ind }} </td>
          <td>{{ p.demand }}</td>
          <td>{{ p.demand_estimated }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      demand_data: {},
    };
  },
  methods: {
    async importRlog() {
      try {
        const rlog = await import("rlog");
        console.log("Rlog library loaded successfully.");
        this.rlog = rlog;
      } catch (err) {
        return console.warn("Rlog library couldn't be loaded. " + err);
      }
    },
    getDemandData() {
      this.importRlog().then(() => {
        this.demand_data = this.rlog.smooth(30, 2.5, 0.2, 50);
        console.log(this.demand_data)
      });
    },
  },
  components: {
    HelloWorld,
  },
  created() {
    this.getDemandData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
