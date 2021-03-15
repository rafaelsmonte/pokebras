import React from "react";
import PokeCard from "./PokeCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GetAll } from "../Assets/PokemonService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchBar: {
    borderColor:'black',
    backgroundColor:'white',
    borderWidth: 0,
    borderStyle: 'solid',
    fontSize:15,
    borderRadius: 25,
    boxShadow:0
  },
}));

function Index() {
  const classes = useStyles();
  let pokemon = GetAll();

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh", maxWidth: "100vw" }}
        className={classes.root}
        spacing={1}
      >
        <Grid item xs={8}>
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justify="center"
          >
            {/*<Grid item xs={10}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  className={classes.searchBar}
                  color="primary"
                  label="Search"
                  style={{ margin: 8 }}
                  placeholder="Search"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
              </form>
                </Grid>*/}

            {pokemon.map((x, i) => (
              <Grid key={i} item lg={3} md={4} xs={12} sm={6}>
                <PokeCard key={i} id={i + 1} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Index;
