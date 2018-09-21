import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Userprofile from "./pages/Userprofile";
import api from "../api";
// import logo from "../logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Souvenirs</h1>
          <NavLink to="/" exact activeClassName="forestgreen">
            Home
          </NavLink>
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && (
            <NavLink to="/userprofile">Userprofile</NavLink>
          )}
          {api.isLoggedIn() && (
            <NavLink to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </NavLink>
          )}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/search" component={Search} />
          <Route path="/userprofile" component={Userprofile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
