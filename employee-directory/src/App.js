import React, { Component } from "react";
import Jumbotron from "./components/jumbotron/jumbotron.js";
import Table from "./components/table/table.js";

class App extends Component {



  render() {
    return (
      <div>
        <Jumbotron />
        <Table />

      </div>
    )
  }

};

export default App;