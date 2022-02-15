import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"
import Nav from "./components/Nav"
import About from "./components/pages/About"
import CustomHook from "./components/pages/CustomHook"
import Home from "./components/pages/Home"
import ReactDND from "./components/pages/react_dnd/ReactDND"

import TaskTracker from "./components/pages/TaskTracker"

import PathfindingVisualizer from "./components/pathfindingVisualizer/PathfindingVisualizer"
import StyleComponent from "./components/pages/StyleComponent"
import NotFound from "./components/pages/notfound/NotFound"
import LocalStorage from "./components/customHook/useLocalStorage/LocalStorage"
import FetchData from "./components/customHook/useFetch/FetchData"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/React-Learn/' exact component={Home} />
          <Route path='/React-Learn/reactdnd' exact component={ReactDND} />
          <Route path='/React-Learn/about' exact component={About} />
          <Route path='/React-Learn/customhook' exact component={CustomHook} />
          <Route path='/React-Learn/stylecomponents' exact component={StyleComponent} />
          <Route path='/React-Learn/taskTracker' exact component={TaskTracker} />
          <Route path='/React-Learn/Dijkstra' exact component={PathfindingVisualizer} />

          <Route path='/React-Learn/customHook/useLocalStorage' exact component={LocalStorage} />
          <Route path='/React-Learn/customHook/useFetch' exact component={FetchData} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
