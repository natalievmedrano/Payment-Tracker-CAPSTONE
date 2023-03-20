import React, { useState } from 'react';
import { Chart } from "react-google-charts";


export const data = [
  ["Year", "Month", "Payment Amount"],
  ["2021", 1000, 400],
  ["2022", 1170, 460],
  ["2023", 660, 1120],

];

export const options = {
  title: "Payment Amount throughout the year",
  curveType: "function",
  legend: { position: "bottom" },
};

export function MoneyTracker() {
  return (
    
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

 
export default MoneyTracker;