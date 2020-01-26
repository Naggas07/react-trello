import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Board from "./components/Board";
import { Route, Switch } from "react-router-dom";
import NewCard from "./components/NewCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Board />
          </Route>
          <Route exact path="/newCard/:id" component={NewCard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
