import React from "react";
import "row.css";

function Row ({ image, name, phone, email, dob}) {
    return (
        <tr>
            <td><img className="employee-image" src={image} alt={name} /></td>
            <td>{name}</td> 
            <td>{phone}</td> 
            <td><a href="mailto:{email}">{email}</a></td> 
            <td>{dob}</td> 
        </tr>
    );
}

export default Row;