import React from "react";
import "./search.css";

function Search (props) {
    return ( 
        <div>
            <input
                value={props.searchEmployee}
                onChange={props.handleInputChange}
                type="search"
                className="search"
                placeholder="Search By Employee"
            />        
        </div>
    )
};

export default Search;