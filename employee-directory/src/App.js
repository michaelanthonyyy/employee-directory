import React, { useEffect, useState } from "react";
import API from "./utils/API";
import Jumbotron from "./components/jumbotron/jumbotron.js";
import Table from "./components/table/table.js";
// import Search from "./components/search/search.js";

function App() {

  let [employees, setEmployees] = useState([]);
  let [search, setSearch] = useState("");

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
        {/* <Search 
          inputChange={handleInputChange}
          results = {search}
        /> */}
        <Table
          employees={employees}
        />
        

      </div>
    )


}
  export default App;