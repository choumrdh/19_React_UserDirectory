import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Jumbotron from "./components/jumbotron/Jumbotron";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <Container>
      <Jumbotron/>
      <Navbar />
    </Container>
    
    
  );
}

export default App;
