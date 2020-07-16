import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navbar from "./components/navbar/Navbar";
import ListGroup from "./components/listGroup/ListGroup";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <ListGroup />
    </div>
  );
}

export default App;
