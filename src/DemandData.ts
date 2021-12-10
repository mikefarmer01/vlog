class DemandPeriod {
    period: number;
    demand: number;
    demand_estimated: number;
    constructor(period: number, demand: number, demand_estimated: number) {
        this.period = period;
        this.demand = demand;
        this.demand_estimated = demand_estimated
    }
}

export interface IDemandData {
    periods: [number],
    demands: [number],
    demands_estimated: [number]
    demandPeriods: DemandPeriod[]
}

export function withPeriods(arrObjDemandData: IDemandData) {
    const o = arrObjDemandData
    const arrDemandPeriods = []
    for (const i in o.periods) {
        arrDemandPeriods.push(new DemandPeriod(o.periods[i], o.demands[i], o.demands_estimated[i]))
    }
    return arrDemandPeriods
}

export function empty() {
    const emptyDemandData: IDemandData = {
        periods: [0],
        demands: [0],
        demands_estimated: [0],
        demandPeriods: [new DemandPeriod(0,0,0)]
    }
    return emptyDemandData;
}