import React from "react";
import ListHeader from "../listHeader/ListHeader";
import ListElement from "../listElement/ListElement";
import ListDatas from "../../friends.json";

class ListGroup extends React.Component {
  state = {
    ListDatas,
  };

  // setData = () => {
  //     this.setState({

  //     });
  // }

  // componentDidMount();
  // //built in function - eventually use this to call api and then update state.

  render() {
    return (
      <div>
        <ListHeader></ListHeader>
        {this.state.ListDatas.map((data) => (
          <ListElement
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            occupation={data.occupation}
            location={data.location}
          />
        ))}
      </div>
    );
  }
}

export default ListGroup;
