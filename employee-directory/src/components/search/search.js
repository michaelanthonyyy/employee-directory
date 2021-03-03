import React from "react";
import "./search.css";

function Search (props) {
    return ( 
        <div>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                type="search"
                className="search"
                placeholder=""
            />        
        </div>
    )
};

export default Search;