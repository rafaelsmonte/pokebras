import React from "react";
import { Grid } from "@material-ui/core";
import { useLocation, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PokeCard from "./PokeCard";
import Pokedex from "./Pokedex";
import PokemonStats from "./PokemonStats";
import { SelecionaPokemon } from "../Assets/PokemonServiceSelecionado";
import PokemonDoubleDamageFrom from "./PokemonDoubleDamageFrom";
import PokemonDoubleDamageTo from "./PokemonDoubleDamageTo";
import PokemonDoubleDamageFromInfo from "./PokemonDoubleDamageFromInfo";
import PokemonDoubleDamageToInfo from "./PokemonDoubleDamageToInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const Pokemon = () => {
  const classes = useStyles();
  let location = useLocation();
  let id = location.id;
  SelecionaPokemon(id);
  if (id == null || id < 1 || id > 151) {
    return <Redirect to="/" />;
  }
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh", maxWidth: "100vw" }}
        className={classes.root}
        spacing={4}
      >
        <Grid item md={8}>
          <Grid
            className={classes.root}
            alignItems="center"
            justify="center"
            container
            spacing={1}
          >
            <Grid item lg={3} md={6} sm={6}>
              <PokeCard id={id} />
            </Grid>
            <Grid item lg={9} md={12} sm={12}>
              <Pokedex />
            </Grid>
            <Grid item md={6} sm={12}>
              <PokemonDoubleDamageFrom />
            </Grid>
            <Grid item md={6} sm={12}>
              <PokemonDoubleDamageFromInfo />
            </Grid>
            <Grid item md={6} sm={12}>
              <PokemonDoubleDamageTo />
            </Grid>
            <Grid item md={6} sm={12}>
              <PokemonDoubleDamageToInfo />
            </Grid>
            <Grid item md={12} sm={12}>
              <PokemonStats />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Pokemon;
