import React, { useEffect, useState } from "react";
import API from "./utils/API";
import Jumbotron from "./components/jumbotron/jumbotron.js";
import Table from "./components/table/table.js";
import Search from "./components/search/search.js";

function App() {

  let [employees, setEmployees] = useState([]);
  let [searchEmployee, setSearch] = useState("");

  let renderEmployees = event => {
    API.getEmployees()
    .then((results) => {
      setEmployees(results)
    }).catch(err => console.log(err))
  };

  useEffect(() => {
      renderEmployees();
    }, [])

  let handleInputChange = event => {
    setSearch(event.target.value);
  };

    return (
      <div>
        <Jumbotron />
        <Search 
          handleInputChange={handleInputChange}
          value = {searchEmployee}
        />
        <Table
          employees={employees}
          search= {searchEmployee}
        />
        

      </div>
    )


}
export default App;