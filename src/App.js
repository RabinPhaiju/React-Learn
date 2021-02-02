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
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
          <Route path='/Dijkstra' component={PathfindingVisualizer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
