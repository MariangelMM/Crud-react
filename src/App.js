import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import 'antd/dist/antd.css';

export default function App() {
  const [auth, setAuth] = useState({ nombre: "", isAuth: false });

useEffect(() => {
const user = JSON.parse(localStorage.getItem("user"))
user && setAuth(user)
}, [])


  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            {!auth.isAuth ? <Login setAuth={setAuth}/> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {auth.isAuth ? <Home /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
