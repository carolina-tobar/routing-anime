import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Manga from "./pages/Manga";
import Error from "./pages/Error";


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/anime" component={Anime}></Route>
          <Route exact path="/manga" component={Manga}></Route>
          <Error />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
