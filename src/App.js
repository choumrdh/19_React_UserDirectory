import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navbar from "./components/navbar/Navbar";
import ListGroup from "./components/listGroup/ListGroup";
import "./App.css"

class App extends React.Component {
  state = {
    SearchWord: "",
  };
  setSearchWord = (value) => {
    this.setState({
      SearchWord: value,
    });
  };
  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar setSearchWord={this.setSearchWord}/>
        <ListGroup searchWord={this.state.SearchWord}/>
      </div>
    );
  }
}

export default App;
