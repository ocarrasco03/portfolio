import React from "react";
import Menu from "./components/navs/Menu";
import About from "./components/about/index";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Menu />
        <About />
      </Container>
    </React.Fragment>
  );
}

export default App;
