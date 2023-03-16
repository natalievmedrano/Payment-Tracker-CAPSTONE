import React, { useState } from "react";
import { Chart } from "react-google-charts";

const PaymentEntries = ({}) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={[["Year", "Payment Amount"], ['2022', 150], ['2023', 200]]}
      legendToggle
    />
  );
};

export default PaymentEntries;
