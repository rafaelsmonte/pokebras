import * as React from "react";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { GetPokemonSelecionado } from "../Assets/PokemonServiceSelecionado";

export default function CharDoubleDamageFrom() {
  let data = [];

  const pokemon = GetPokemonSelecionado();
  data.push(
    {
      entry: "Double Damage Taken",
      value: pokemon?.doubleDamageFrom?.length
        ? pokemon.doubleDamageFrom.length
        : 0,
    },
    { entry: "Other Types", value: 19 - pokemon?.doubleDamageFrom?.length }
  );

  return (
    <Chart height="250" data={data}>
      <PieSeries
        valueField="value"
        argumentField="entry"
        innerRadius={0.7}
        name="entry"
      />
      <Title text="Double Damage Taken" />

      <Animation />
    </Chart>
  );
}
