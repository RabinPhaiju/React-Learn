# React

    - React is js library created by Facebook in 2011 for frontend.
    - uses component based approach for high reusability using js and jsx.
    - component is building block for react app.
    - View of MVC
    - Server-side rendering
    - single flow of data.

# Virtual DOM

    - A simple js object, that is exact copy of read DOM.
    - not a regular js object, so browser can not read it. babel is used to convert ot js object.
    - A node that consists of elements, attributes and properties.
    - Using a render function.
    - cannot use react directly with db.

# JSX

    - JavaScript XML. mix of js and html template.
    es6 + jsx (babel) => es5

# DOM

| Virtial DOM                              | Real DOM                                          |
| ---------------------------------------- | ------------------------------------------------- |
| Changes can be made easily               | Changes can be expensive                          |
| Minimal memory wastage                   | High demand for memory and more wastage           |
| JSX element is updated of element exists | Creates new DOM everytime an element gets updated |
| Cannot update HTML directly              | Able to direct manipulate HTML                    |
| Faster updates                           | Slower Updates                                    |

# Why react

    - server side rendering
    - virtual dom
    - uni-directional data binding : mechanism to bind data values to html elements.
    - Easy UI testing
    - Can integrate with angular and other framework easily.
    - High redability (JSX)

# Component-based

    - components are foundation of react
    - re-usable component and independent.

# Render

    - render() returns element taht represents a DOM component.

# States

    - Easily create dynamic and interactive components.

# HoC

    - custom component that wraps another compnents.
    - takes a component as a parameter and returns a component.
    - manipulation of props, state manipulation, code reuse

# Redux

    - to store the state of application.
    - single store
    - components of react: action,reducer,store,view
    - build on top of context api.

# Props

    - short for properties
    - read-only
    - pure or immutable, cannot change props in reveiving component.
    - always pass down from parent to child component
    - used to render dynamic data
    - share data between components

# Component life cycle

    - predefined method of component that can monitor and update component.
    - Initial rendering (Mounting):
    - Update:
    - Unmounting: destruction of component or remove from DOM.

# Events

    - any action on DOM.
    - perform set activities as a response to triggers.

# Routing

    - single page application.
    - views are not refreshed.

# statefull components

    - that stores changes happen and place then on memeory.

# Ref

    - used to store reference to a single react element/component.

# Router

    - manages multiple routes

# Pure component

    - to replace component having only render function
    - that component which do not re-render.
    - to ensure performance.

# avoid binding

    - arrow function
    - hooks

# StrictMode

    - debugging

# predefined prop types

    - string,number,bool,function,node

# Hooks

    - function that let us hook react states and lifecycle features from functional components.

# Optimize react app performance

    - using useMemo : cache and changes if component state is change.
    - using purecomponent

# setState

    - first argument: updater or variable
    - second argument: optional callback function

# Context api

    - to effectively produce global variables that can be passed around components.

# Controlled Components

    - Smart component having setstate
    - have a input form and these input fields controlled by react state.

# Un-controlled components

    - dumb component having props
    - have a input form and these input fields are controlled by dom or ref.

# npm

    - node package manager
    - helps to install library in react js

# jest

    - unit testing framework

# component inside component

# multiple component in same file.

# Dumb components are stateless functional components.

# pass data from child to parent

    - create a function in parent and pass that function to child
    - create a variable in child and pass it to the function.

# useLayoutEffect

    - useLayoutEffect is called after render.
    - useEffect is called before render.
    - It runs after render but before painting to screen.

# package.json

    - json file that contains all the dependencies.
    - npm configurations file.
    - includes : scripts,dependencies,devDependencies.
