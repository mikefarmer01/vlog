<template>
  <div id="app">
    <div class="app-container">
      <TabMenu :model="menu" />
      <Splitter style="height: 800px">
        <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
          <Splitter layout="vertical">
            <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
              <DemandParams />
            </SplitterPanel>
            <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
              <DemandPlot :demand_data="demand_data" />
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
        <SplitterPanel class="p-d-flex p-ai-center p-jc-center">
          <DemandData :demand_data="demand_data" />
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
</template>

<script>
import TabMenu from "primevue/tabmenu/sfc";
import Splitter from "primevue/splitter/sfc";
import SplitterPanel from "primevue/splitterpanel/sfc";
import DemandParams from "./components/DemandParams.vue";
import DemandData from "./components/DemandData.vue";
import DemandPlot from "./components/DemandPlot.vue";

export default {
  name: "App",
  data() {
    return {
      menu: [
        { label: "Exponentielle Glättung", icon: "pi pi-fw pi-home" },
        { label: "Beer Game", icon: "pi pi-fw pi-calendar" },
        { label: "System", icon: "pi pi-fw pi-pencil" },
      ],
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
        this.demand_data = this.rlog.smooth(30, 3, 0.5, 100);
      });
    },
  },
  components: {
    TabMenu,
    DemandParams,
    DemandData,
    DemandPlot,
    Splitter,
    SplitterPanel,
  },
  created() {
    this.getDemandData();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  text-align: left;
}
body #app .p-button {
  margin-left: 0.2em;
}
form {
  margin-top: 2em;
}
html {
  font-size: 14px;
}

body {
  background-color: var(--surface-0);
  font-family: var(--font-family);
  font-weight: normal;
  color: var(--text-color-secondary);
  padding: 0.5em;
  margin-bottom: 50px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.5rem 0 1rem 0;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.2;
  color: inherit;
}

h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}
p {
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.card {
  margin-bottom: 2rem;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
