import init, { InitOutput } from '../../pkg/rlog'
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

  async plot() {
    console.debug('Plotting demand data.')
    await this.rlog.clear(this.canvas_name);
    this.rlog.plot(this.store.demandData.demands, "demandPlot", this.demandsColor);
    this.rlog.plot(this.store.demandData.demands_estimated, "demandPlot", this.demandsEstimatedColor);
  }
  async smooth() {
    const dp = this.store.demandParams;
    console.debug('Smoothing with demand parameters:')
    console.debug(dp)
    const demandData = await this.rlog.smooth(dp.mean, dp.std_dev, dp.alpha, dp.period_count);
    this.store.setDemandData(demandData);
    console.debug('Smoothed.');
  }
  async resmooth() {
    console.debug('Resmoothing with demand parameters:')
    console.debug(this.store.demandParams)
    const demandData = await this.rlog.resmooth(this.store.demandParams.alpha, this.store.demandData.demands);
    this.store.setDemandData(demandData);
    console.debug('Resmoothed.');
  }

}
