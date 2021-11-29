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
        <tr v-for="p in periods" v-bind:key="p">
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
      periods: {},
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
    getPeriods() {
      this.importRlog().then(() => {
        this.periods = this.rlog.demand();
      });
    },
  },
  components: {
    HelloWorld,
  },
  created() {
    this.getPeriods();
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
