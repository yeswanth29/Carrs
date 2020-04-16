import React from "react";
import Home from "./pages/Home";
import Room from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Rooms" component={Room} />
        <Route exact path="/Rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
