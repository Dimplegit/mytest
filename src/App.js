import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import home from "./components/pages/home";
import about from "./components/pages/about";
import Contact from "./components/pages/contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import notfound from "./components/pages/notfound";
import adduser from "./components/users/adduser";
function App() {
  return (
    <Router>
      <div className="App">
    <Navbar />
    <Switch>
      <Route exact path="/" component ={home} />
      <Route exact path="/about" component={about} />
      <Route exact path="/contact" component={ Contact} />
      <Route exact path="/user/add" component={adduser}/>
      <Route component={notfound} />
    </Switch>
      </div>
    </Router>
  );
};

export default App;
