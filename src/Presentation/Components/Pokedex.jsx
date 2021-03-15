import Card from "@material-ui/core/Card";
import Style from "../Styles/PokeDexStyle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { GetPokemonSelecionado } from "../Assets/PokemonServiceSelecionado";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(Style);

const PokeDex = ({ texto }) => {
  const classes = useStyles();
  let pokemon = GetPokemonSelecionado();
  return (
    <Card className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "35vh" }}
      >
        <Grid item xs={12}>
          <Typography gutterBottom align="center" component="h3" variant="h3">
            Entries
          </Typography>

          <Typography align="center" component="h5" variant="h5">
            {pokemon?.pokedexes ? pokemon?.pokedexes[0]?.pokedex : ""}
          </Typography>
          <Typography align="center" component="h5" variant="h5">
            {pokemon?.pokedexes ? pokemon?.pokedexes[5].pokedex : ""}
          </Typography>
          <Typography align="center" component="h5" variant="h5">
            {pokemon?.pokedexes ? pokemon?.pokedexes[9]?.pokedex : ""}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PokeDex;
