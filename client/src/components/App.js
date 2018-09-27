import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Userprofile from "./pages/Userprofile";
import RequestDetails from "./pages/RequestDetails";
import NewRequest from "./pages/NewRequest";
import Search from "./pages/Search";
import SendEmail from "./pages/SendEmail";
import api from "../api";
import envelope from "./envelope-05.svg";
// import reactstrap from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
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
          {api.isLoggedIn() && <NavLink to="/userprofile">Userprofile</NavLink>}
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
          <Route path="/request/:id" component={RequestDetails} />
          <Route path="/send-email" component={SendEmail} />
          <Route path="/newrequest" component={NewRequest} />
          <Route render={() => <h3>404! Sorry...</h3>} />
        </Switch>
        <footer>
          <img src={envelope} alt="international envelope" />
        </footer>
      </div>
    );
  }
}

export default App;
