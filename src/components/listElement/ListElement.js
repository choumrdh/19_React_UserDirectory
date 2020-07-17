import React from "react";
import "./ListElement.css";

const ListElement = (props) => {
  return (
    <div>
      <div className="row text-center mr-2 ml-2">
        <img
          className="col-sm-2 col-md-2 col-lg-2"
          alt={props.firstName}
          src={props.image}
        />

        <p className="col-sm-2 col-md-2 col-lg-2">{props.firstName} {props.lastName}</p>
        <p className="col-sm-3 col-md-3 col-lg-3">{props.phone}</p>
        <p className="col-sm-3 col-md-3 col-lg-3">{props.email}</p>
        <p className="col-sm-2 col-md-2 col-lg-2">{props.dob}</p>
      </div>
    </div>
  );
}


export default ListElement;
