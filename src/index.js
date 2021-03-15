
import React from "react";
import ReactDOM from "react-dom";
import Home from './Presentation/Pages/Home'
import About from './Presentation/Pages/About'
import Pokemon from './Presentation/Pages/Pokemon'
import NavBar from './Presentation/Components/NavBar'
import reportWebVitals from "./reportWebVitals";
import {Route, BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <NavBar />
    <Route path='/' exact component={Home}/>
    <Route path='/About' component={About}/>
    <Route path='/Pokemon' component={Pokemon}/>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();