import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About";
import SingleCocktail from "./pages/singleCocktail/SingleCocktail.jsx";
import Error from "./pages/error/Error.jsx";
// import components
import Navbar from "./components/navbar/Navbar.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
