import { Routes, Route } from "react-router-dom"
import React from "react"
import Nav from "./components/Nav"
import About from "./components/pages/About"
import CustomHook from "./components/pages/CustomHook"
import Home from "./components/pages/Home"

import TaskTracker from "./components/pages/TaskTracker"

import PathfindingVisualizer from "./components/pathfindingVisualizer/PathfindingVisualizer"
import StyleComponent from "./components/pages/StyleComponent"
import NotFound from "./components/pages/notfound/NotFound"
import LocalStorage from "./components/customHook/useLocalStorage/LocalStorage"
import FetchData from "./components/customHook/useFetch/FetchData"
import ReactResponsive from "./components/pages/react_responsive/ReactResponsive"
import MediaQuery from "./components/customHook/useMediaQuery/MediaQuery"
import FetchProduct from "./components/customHook/useProduct/FetchProduct"

function App() {
  return (
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/React-Learn/' exact element={<Home/>} />
          <Route path='/React-Learn/about' exact element={<About/>} />
          <Route path='/React-Learn/stylecomponents' exact element={<StyleComponent/>} />
          <Route path='/React-Learn/taskTracker' exact element={<TaskTracker/>} />
          <Route path='/React-Learn/Dijkstra' exact element={<PathfindingVisualizer/>} />
          <Route path='/React-Learn/react-responsive' exact element={<ReactResponsive/>} />
          <Route path='/React-Learn/customhook' exact element={<CustomHook/>} >
            <Route path='useLocalStorage' exact element={<LocalStorage/>} />
            <Route path='useFetch' exact element={<FetchData/>} />
            <Route path='useProducts' exact element={<FetchProduct/>} />
            <Route path='useMediaQuery' exact element={<MediaQuery/>} />
          </Route>
          <Route element={<NotFound/>} />
          </Routes>
      </div>
  )
}

export default App
