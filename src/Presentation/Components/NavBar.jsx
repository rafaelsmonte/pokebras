import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import pokebras from "../Images/pokebras.png";
import { getStyles } from "../Styles/PokeNavBarStyle";

const useStyles = makeStyles((theme) => getStyles(theme));

export default function PrimarySearchAppBar() {
  const mobileMenuId = "primary-search-account-menu-mobile";
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link style={{ textDecoration: "none" }} to="/">
          <p className={classes.navbarPMobile}>List 'em all</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link style={{ textDecoration: "none" }} to="/About">
          <p className={classes.navbarPMobile}>About</p>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link style={{ textDecoration: "none" }} to="/">
              <img alt="Pokebras" src={pokebras} />
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={classes.navbarP}>List 'em all</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/About">
              <p className={classes.navbarP}>About</p>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
