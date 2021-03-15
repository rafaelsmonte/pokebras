import React from "react";
import {  Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Bulba from "../Images/bulbalinkedin.png";
import Mew from "../Images/mewgit.png";
import Squirtle from "../Images/squirtleinsta.png";
import Style from "../Styles/PokeAboutStyle";

const useStyles = makeStyles(Style);

const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh", maxWidth: "100vw" }}
        spacing={1}
      >
        <Grid item md={12} sm={12} xs={12}>
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justify="center"
            className={classes.root}
          >
         
            
            <Grid align='center' item lg={4} md={6} xs={12} sm={6}>
              <a href="https://www.linkedin.com/in/rafael-santos-monte-09b73118b/" rel="noreferrer" target="_blank"><img alt="linkedin" src={Bulba} /></a>
            </Grid>
            <Grid align='center' item lg={4} md={6} xs={12} sm={6}>
            <a href="https://www.instagram.com/_rafaelmonte/" rel="noreferrer" target="_blank"><img alt="instagram" src={Squirtle} /></a>
            </Grid>
            <Grid align='center' item lg={4} md={6} xs={12} sm={6}>
            <a href="https://github.com/rafaelsmonte/" rel="noreferrer" target="_blank"><img alt="git" src={Mew} /></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default About;
