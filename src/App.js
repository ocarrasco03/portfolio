import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/navs/Menu";
import Bio from "./components/home/index";
import About from "./components/about/index";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4)
  },
  mt5: {
    marginTop: theme.spacing(5)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.root}>
          <Menu />
          <Route exact path='/' component={ Bio } className={classes.mt5} />
          <Route exact path='/about' component={ About }  />
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
