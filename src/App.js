import React from "react";
import Menu from "./components/navs/Menu";
import Bio from './components/home/index';
import About from "./components/about/index";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
  },
  mt5: {
    marginTop: theme.spacing(5),
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Menu />
        <Bio className={classes.mt5} />
        {/* <About /> */}
      </Container>
    </React.Fragment>
  );
}

export default App;
