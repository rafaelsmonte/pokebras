import Card from "@material-ui/core/Card";
import Style from "../Styles/PokeDexStyle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { GetPokemonSelecionado } from "../Assets/PokemonServiceSelecionado";
import { UpperCaseFirstLetter } from "../Assets/Formatter";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles(Style);
const PokemonDoubleDamageToInfo = ({ texto }) => {
  const pokemon = GetPokemonSelecionado();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '35vh' }}
      >
        <Grid item xs={12} >
          <Typography align="center" gutterBottom component="h3" variant="h3">
            Type: {pokemon?.tipo?.map((x, i) => UpperCaseFirstLetter(x) + " ")}
          </Typography>
          <Typography align="center" component="h5" variant="h5">
            {UpperCaseFirstLetter(pokemon?.nome)} is strong against{" "}
            {pokemon?.doubleDamageTo?.map((x, i) => x + " ")}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PokemonDoubleDamageToInfo;
