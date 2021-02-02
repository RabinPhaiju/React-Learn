import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/React-Learn' exact component={Home} />
          <Route path='/React-Learn/about' exact component={About} />
          <Route path='/React-Learn/shop' exact component={Shop} />
          <Route path='/React-Learn/Dijkstra' exact component={PathfindingVisualizer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
