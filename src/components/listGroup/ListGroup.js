import React from "react";
import ListHeader from "../listHeader/ListHeader";
import ListElement from "../listElement/ListElement";
import axios from "axios";

class ListGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      isSortByName: false,
    };
    this.BASEURL = "https://randomuser.me/api/?results=50&nat=us";
  };
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
  };

  getDate = (dob) => {
    const dateOfBirth = new Date(dob);
    const month = dateOfBirth.getMonth() + 1;
    const date = dateOfBirth.getDate();
    const year = dateOfBirth.getFullYear();
    return `${month}/${date}/${year}`;
  };

  filterByName = () => {
    const { searchResults } = this.state;
    const { searchWord } = this.props;
    if (searchWord === "") {
      return [...searchResults];
    }
    return searchResults.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(searchWord.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
   
     
  };

  sortbyName = (filteredResult) => {
    return filteredResult.sort((userA, userB) => {
      const userAName = `${userA.name.first.toLowerCase()} ${userA.name.last.toLowerCase()}`;
      const userBName = `${userB.name.first.toLowerCase()} ${userB.name.last.toLowerCase()}`;
      return userAName > userBName ?1:-1;
    });
  };

  render() {
   let filteredResult = this.filterByName();
   if (this.state.isSortByName){
     
     filteredResult = this.sortbyName(filteredResult);
   
   } ;
   
    return (
      <div className="hero">
        <ListHeader onNameClick={()=>{this.setState({isSortByName:!this.state.isSortByName})}}></ListHeader>
        {filteredResult.map((user, index) => (
          <ListElement
            id={user.id.value}
            key={index}
            image={user.picture.large}
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
