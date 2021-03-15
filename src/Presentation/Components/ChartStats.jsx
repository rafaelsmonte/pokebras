import * as React from "react";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

import { Stack, Animation } from "@devexpress/dx-react-chart";
import { GetPokemonSelecionado } from "../Assets/PokemonServiceSelecionado";

export default function ChartStats() {
  let data = [];

  const pokemon = GetPokemonSelecionado();
  pokemon?.stats?.forEach((stats) => {
    data.push({
      baseStat: stats.baseStat,
      statName: stats.statName,
    });
  });
  
const getPath = (x, width, y, y1) => `M ${x} ${y1}
   L ${width + x} ${y1}
   L ${width + x} ${y + 30}
   L ${x + width / 2} ${y}
   L ${x} ${y + 30}
   Z`;

const labelStyle = { fill: '#BBDEFB' };
  const BarWithLabel = ({
    arg, barWidth, maxBarWidth, val, startVal, color, value, style,
  }) => {
    const width = maxBarWidth * barWidth;
    return (
      <React.Fragment>
        <path d={getPath(arg - width / 2, width, val, startVal)} fill={color} style={style} />
        <Chart.Label
          x={arg}
          y={(val + startVal) / 2}
          dominantBaseline="middle"
          textAnchor="middle"
          style={labelStyle}
        >
          {value}
        </Chart.Label>
      </React.Fragment>
    );
  };
  return (
    <Chart data={data}>
      <ArgumentAxis />
      <ValueAxis max={1000} />

      <BarSeries
        name="baseStat"
        valueField="baseStat"
        argumentField="statName"
        pointComponent={BarWithLabel}
      />
  
      <Title text="Stats" />
      <Stack stacks={[{ series: ["Stats"] }]} />
      <Animation />
    </Chart>
  );
}
