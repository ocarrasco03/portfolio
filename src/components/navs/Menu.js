import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Fab, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FF3411",
    color: "#fff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#FF3411"
    }
  },
  navbar: {
    color: "#fff",
    //   backgroundColor: "#FF3411",
    left: "40px"
  }
}));
export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <React.Fragment>
      <Fab className={classes.root} onClick={handleClick} aria-haspopup={true}>
        <MenuIcon />
      </Fab>
      <div
        id="nav-bar"
        className={classes.navbar}
      >
          <MenuItem>Main</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Experience</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>References</MenuItem>
        <MenuItem>Contact</MenuItem>
      </div>
      {/* <Menu
        id="nav-bar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.navbar}
      >
        <MenuItem>Main</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Experience</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>References</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu> */}
    </React.Fragment>
  );
}
