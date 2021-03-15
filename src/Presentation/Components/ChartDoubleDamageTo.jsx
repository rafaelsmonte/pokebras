import * as React from "react";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { GetPokemonSelecionado } from "../Assets/PokemonServiceSelecionado";

export default function ChartDoubleDamageTo() {
  let data = [];
  const pokemon = GetPokemonSelecionado();
  data.push(
    {
      entry: "Double Damage Done",
      value: pokemon?.doubleDamageTo?.length
        ? pokemon.doubleDamageTo.length
        : 0,
    },
    { entry: "Other Types", value: 19 - pokemon?.doubleDamageTo?.length }
  );
  return (
    <Chart height="250" data={data}>
      <PieSeries
        valueField="value"
        argumentField="entry"
        innerRadius={0.7}
        name="entry"
      />
      <Title text="Double damage done" />
      <Animation />
    </Chart>
  );
}
