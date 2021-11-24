import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export default function App() {
  const [auth, setAuth] = useState({ name: "", isAuth: true });

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            {!auth.isAuth ? <Login /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {auth.isAuth ? <Home /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
