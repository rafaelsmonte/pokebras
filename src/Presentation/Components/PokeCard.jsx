import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Style from "../Styles/PokeCardStyle";
import { getRGBA, getCorChip } from "../Styles/Cores";
import { BuscarPorID } from "../Assets/PokemonService";
import { Format3Digits, UpperCaseFirstLetter } from "../Assets/Formatter";
import { Link } from "react-router-dom";

const useStyles = makeStyles(Style);

const PokeCard = ({ id }) => {
  if (isNaN(id)) id = 1;

  let pokemon = BuscarPorID(id);
  const classes = useStyles();
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: "/Pokemon",
        id,
      }}
    >
      <Card
        className={classes.root}
        style={{ backgroundColor: getRGBA(pokemon?.tipo[0] || "") }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pokemon?.foto}
            title={pokemon?.nome}
            component="img"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h6" component="h6">
              #{Format3Digits(pokemon?.id)}
            </Typography>
            <Typography variant="h5" component="h1">
              {UpperCaseFirstLetter(pokemon?.nome || "")}
            </Typography>
            <Typography gutterBottom variant="h6">
              Tipo:{" "}
              {pokemon?.tipo?.map((x, i) => (
                <Chip
                  key={i}
                  className={classes.chip}
                  style={{ backgroundColor: getCorChip(x) }}
                  label={UpperCaseFirstLetter(x || "")}
                />
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default PokeCard;
