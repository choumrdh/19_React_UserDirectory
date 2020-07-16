import React from "react";
import "./ListElement.css";

const ListElement = (props) => {
  console.log("props", props);
  return (
    <div>
      <div className="row text-center">
        <img
          className="col-sm-2 col-md-2 col-lg-2"
          alt={props.name.first}
          src={props.data.results.picture.medium}
        />

        <p className="col-sm-2 col-md-2 col-lg-2">{props.name.first}</p>
        <p className="col-sm-2 col-md-2 col-lg-2">{props.name.last}</p>
        <p className="col-sm-2 col-md-2 col-lg-2">{props.cell}</p>
        <p className="col-sm-2 col-md-2 col-lg-2">{props.email}</p>
        <p className="col-sm-2 col-md-2 col-lg-2">{props.dob.date}</p>
      </div>
    </div>
  );
};

export default ListElement;
