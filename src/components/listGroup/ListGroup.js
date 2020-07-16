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
      this.setState({ searchResults: result.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.randomUserSearch();
  }

  getDate = (dob) => {
    const dateOfBirth = new Date(dob);
    const month = dateOfBirth.getMonth() + 1;
    const date = dateOfBirth.getDate();
    const year = dateOfBirth.getFullYear();
    return `${month}/${date}/${year}`;
  };

  filterByName = () => {
    const {searchResults} = this.state;
    const {searchWord} = this.props;
    if (searchWord === ""){
      return searchResults
    }
    return searchResults.filter((user)=>{
      console.log(user.name.first)
      return user.name.first.toLowerCase().includes(searchWord.toLowerCase()) || user.name.last.toLowerCase().includes(searchWord.toLowerCase())
    })
    
  };
  
  render() {
    return (
      <div>
        <ListHeader></ListHeader>
        {this.filterByName().map((user, index) => (
          <ListElement
            id={user.id.value}
            key={index}
            image={user.picture.medium}
            firstName={user.name.first}
            lastName={user.name.last}
            phone={user.cell}
            email={user.email}
            dob={this.getDate(user.dob.date)}
          />
        ))}
      </div>
    );
  }
}

export default ListGroup;
