<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <DemandData :demand_data="demand_data"/>
    <DemandPlot :demand_data="demand_data"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DemandData from "./components/DemandData.vue";
import DemandPlot from "./components/DemandPlot.vue";

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
        this.demand_data = this.rlog.smooth(30, 3, 0.5, 50);
      });
    },
  },
  components: {
    HelloWorld,
    DemandData,
    DemandPlot
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
