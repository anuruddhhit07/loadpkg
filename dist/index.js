"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myFunction_1 = require("./utils/myFunction");
var greeting = "Hello, TypeScript!";
console.log(greeting);
(0, myFunction_1.myFunction)(greeting);
exports.default = myFunction_1.myFunction;
// export function generateLineChart(ohlcvData: OHLCVData[], targetDivId: string): void {
//     const svg = d3.select(`#${targetDivId}`).append('svg');
//     // Add D3 code to generate line chart using OHLCV data
// }
