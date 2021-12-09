class DemandPeriod {
    constructor(period, demand, demand_estimated) {
        this.period = period;
        this.demand = demand;
        this.demand_estimated = demand_estimated
    }
}

export function withPeriods(arrObjDemandData){
    var o = arrObjDemandData
    var arrDemandPeriods = []
    for (let i in o.periods) {
        arrDemandPeriods.push(new DemandPeriod(o.periods[i], o.demands[i], o.demands_estimated[i]))
    }
    return arrDemandPeriods
}

export function empty(){
    return {periods: new DemandPeriod(0,0,0), demands: [], demands_estimated: []}
}