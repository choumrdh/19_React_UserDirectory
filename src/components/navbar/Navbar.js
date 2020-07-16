import React from "react";

function Navbar(){
    return(
        <div className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Home</a>
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Sort by " aria-label="Search"/>
            </form>
        </div>
    )
};

export default Navbar;