import React from "react";

function Navbar(props){
    return(
        <div className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Home</a>
            <form className="form-inline">
            <input 
                onChange={(event) => props.setSearchWord(event.target.value)} 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="search" 
                aria-label="Search"
            />
            </form>
        </div>
    )
};

export default Navbar;