import Card from "@material-ui/core/Card";
import Style from "../Styles/PokeDexStyle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ChartDoubleDamageTo from "./ChartDoubleDamageTo";
import Badge from "@material-ui/core/Badge";
import '../Assets/CSS/PokemonsDamageStyle.css'

const useStyles = makeStyles(Style);

const PokemonDoubleDamageTo = ({ texto }) => {
  const classes = useStyles();
  return (
    <Card id={'damageInfo'} className={classes.root}>
      <Typography gutterBottom variant="h5">
        <ChartDoubleDamageTo />
        <div style={{ textAlign: "center" }}>
          <Typography component="h5" variant="h5">
            <Badge
              classes={{ badge: classes.blueBadge }}
              badgeContent=" "
              variant="dot"
            />{" "}
            Types that you cause double damage{" "}
          </Typography>
          <Typography component="h5" variant="h5">
            <Badge
              classes={{ badge: classes.orangeBadge }}
              badgeContent=" "
              variant="dot"
            />{" "}
            Other types
          </Typography>
        </div>
      </Typography>
    </Card>
  );
};

export default PokemonDoubleDamageTo;
