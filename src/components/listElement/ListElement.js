import React from "react";
import "./ListElement.css";

const ListElement = (props) => {
  return (
    <div>
      <div className="row text-center ">
        <img className="col-sm-2" alt={props.name} src={props.image} />

        <p className="col-sm-2">{props.name}</p>
        <p className="col-sm-2">{props.occupation}</p>
        <p className="col-sm-4">{props.location}</p>
        <p className="col-sm-2">
          <strong>Date of Birth:</strong>
        </p>
      </div>
    </div>
  );
};

export default ListElement;
