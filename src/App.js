import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export default function App() {
  const [auth, setAuth] = useState({ name: "", isAuth: false });

  useEffect(() => {
    // lectura de local storage para actualizar el estado auth en cada renderizado
    const _auth = JSON.parse(localStorage.getItem("user"));
    _auth && setAuth(_auth);
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            {!auth.isAuth ? <Login setAuth={setAuth} /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {auth.isAuth ? <Home setAuth={setAuth} auth={auth} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
