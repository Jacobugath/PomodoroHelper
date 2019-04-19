import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Pomodoro from "./components/pomodoro.component"

const tom = './tomato.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <img src={tom} width="35" height="30" alt="logo" />
            <Link to="/" className="navbar-brand">Pomodoro Helper</Link>
            <div className="collpase navbar-collapse">

            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/pomodoro/:id" component={Pomodoro} />

        </div>
      </Router>
    );
  }
}

export default App;