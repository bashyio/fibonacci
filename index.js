const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

let n = process.argv[2]
if (!n) n = 10

const fseries = (n) => {
  let c = 0
  let series = []
  while (c < n) {
    if (c <= 1) {
      series.push(c)
    } else {
      series.push(series[c - 2] + series[c - 1])
    }
    c++
  }
  return series
}
let t0 = performance.now()
console.log(fseries(n))
let t1 = performance.now()

console.log("fseries took " + (t1 - t0) + " milliseconds." + "or " + ((t1 - t0) / 1000) + " seconds.")