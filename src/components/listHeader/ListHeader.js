import React from 'react';


function ListHeader(props){
    return(
        <div className ="card-header row text-center mr-2 ml-2">
            <p className ="col-sm-2 col-md-2 col-lg-2">Image</p>
            <p className ="col-sm-2 col-md-2 col-lg-2" onClick = {()=>{props.onNameClick()}}>Name</p>
            <p className ="col-sm-3 col-md-3 col-lg-3">Phone</p>
            <p className ="col-sm-3 col-md-3 col-lg-3">Email</p>
            <p className ="col-sm-2 col-md-2 col-lg-2">DOB</p>
        </div>
    );
};

export default ListHeader;