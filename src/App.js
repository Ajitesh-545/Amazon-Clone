import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout"
function App() {
  
return (
  <div className="app">
    <Router>
      <Switch>
        
      <Route path="/login">
        <Header />
        <Login />
      </Route>
      <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
      
        <Route path="/">
          
        <Header />
        
        <Home />
        
        </Route>
        
      </Switch>
    </Router>
  </div>
);
}

export default App;
