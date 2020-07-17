import React from "react";
import "./ListElement.css";

const ListElement = (props) => {
  return (
    <div>
      <ul className="row text-center mr-2 ml-2">
        <img
          className="col-sm-2 col-md-2 col-lg-2"
          alt={props.firstName}
          src={props.image}
        />

        <li className="col-sm-2 col-md-2 col-lg-2">{props.firstName} {props.lastName}</li>
        <li className="col-sm-3 col-md-3 col-lg-3">{props.phone}</li>
        <li className="col-sm-3 col-md-3 col-lg-3">{props.email}</li>
        <li className="col-sm-2 col-md-2 col-lg-2">{props.dob}</li>
      </ul>
    </div>
  );
}


export default ListElement;
