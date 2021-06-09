import "./App.css";
import Navabar from "./component/Navbar/Navabar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Destination from "./component/Destination/Destination";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import NotFound from "./component/CustomForm/NotFound/NotFound";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navabar></Navabar>
        {/* <p>Name : {loggedInUser.name}</p> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
