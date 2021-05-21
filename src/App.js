import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Home from "./components/pages/Home";

import TaskTracker from "./components/pages/TaskTracker";

import PathfindingVisualizer from "./components/pathfindingVisualizer/PathfindingVisualizer";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/React-Learn' exact component={Home} />
          <Route path='/React-Learn/about' exact component={About} />
          <Route path='/React-Learn/shop' exact component={Shop} />
          <Route path='/React-Learn/taskTracker' exact component={TaskTracker} />
          <Route path='/React-Learn/Dijkstra' exact component={PathfindingVisualizer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
