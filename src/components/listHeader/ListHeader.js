import React from 'react';


function ListHeader(){
    return(
        <div className ="card-header row text-center mt-2">
            <p className ="col-sm-2">Image</p>
            <p className ="col-sm-2">Name</p>
            <p className ="col-sm-2">Phone</p>
            <p className ="col-sm-4">Email</p>
            <p className ="col-sm-2">DOB</p>
        </div>
    );
};

export default ListHeader;