import React from "react";
import Row from "../row/row.js";
import "./table.css";

function Table(props) {
    // render() {
        return (
            <div>
                <table className="table table-responsive">
                    {props.employees.map(employee => (

                    <Row 
                        image={employee.image}
                        name={employee.name}
                        phone={employee.phone}
                        email={employee.email}
                        dob={employee.dob}
                    />
                    ))}
                </table>



            </div>
        )
}

export default Table;
