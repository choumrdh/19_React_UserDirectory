import React from "react";
import ListHeader from "../listHeader/ListHeader";
import ListElement from "../listElement/ListElement";
import axios from "axios";

class ListGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
    this.BASEURL = "https://randomuser.me/api/?results=20&nat=us";
  }
  randomUserSearch = async () => {
    try {
      const result = await axios.get(this.BASEURL);
      this.setState({results:result.data.results});

      console.log(result);
      console.log(result.data.results[0].picture.large);
      console.log(result.data.results[0].name.last);
      console.log(result.data.results[0].name.first);
      console.log(result.data.results[0].cell);
      console.log(result.data.results[0].email);
      console.log(result.data.results[0].dob.date);
      
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.randomUserSearch();
  }


  render() {
    return (
      <div>
        <ListHeader></ListHeader>
        {this.state.searchResults.map((user) => (
          <ListElement
            id={user.data.results.id.value}
            key={user.id.value}
            image={user.data.results.picture.medium}
            firstName={user.name.first}
            lastName = {user.name.last}
            phone ={user.cell}
            email={user.email}
            dob={user.dob.date}
          />
        ))}
      </div>
    );
  }
}

export default ListGroup;
