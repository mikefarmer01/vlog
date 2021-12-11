import init, { InitOutput, IDemandData } from '../../pkg/rlog'
import { useStore } from './store'

export class RlogHandler {
  canvas_name: string;
  demandsColor: [number, number, number];
  demandsEstimatedColor: [number, number, number];
  rlog!: InitOutput;
  store;

  constructor(canvas_name: string, demandsColor: [number, number, number], demandsEstimatedColor: [number, number, number]) {
    this.canvas_name = canvas_name;
    this.demandsColor = demandsColor;
    this.demandsEstimatedColor = demandsEstimatedColor;
    this.store = useStore();
  }

  async load() {
    this.rlog = await init();
    return this.rlog;
  }

  plot() {
    try {
      this.rlog.clear(this.canvas_name);
      this.rlog.plot(this.store.demandData.demands, "demandPlot", this.demandsColor)
      //TODO: Implement canvas backend sharing in the rust backend so that the seconds plot doesn't overwrite the first one.
      this.rlog.plot(this.store.demandData.demands_estimated, "demandPlot", this.demandsEstimatedColor)
    } catch (err) {
      console.error(err)
    }
  }
  smooth() {
    try {
      const demandData: IDemandData = this.rlog.smooth(this.store.demandParams.mean, this.store.demandParams.std_dev, this.store.demandParams.alpha, this.store.demandParams.period_count)
      this.store.setDemandData(demandData)
    } catch (err) {
      console.error(err)
    }
  }

}
