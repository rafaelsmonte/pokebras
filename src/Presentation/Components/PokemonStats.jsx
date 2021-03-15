import Card from "@material-ui/core/Card";
import Style from "../Styles/PokeStatsStyle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChartStats from "./ChartStats";
import '../Assets/CSS/PokemonsStatsStyle.css'


const useStyles = makeStyles(Style);
const PokemonStats = ({ texto }) => {
  const classes = useStyles();

  return (
    <Card id={'chartStats'} className={classes.root}>
      <ChartStats />
    </Card>
  );
};

export default PokemonStats;
