import axios from "axios";

export default {
    getEmployees: function () {
        axios.get("https://randomuser.me/api/?results=30").then((res) => {
            let employees = res.data.results;
            // let results = employees.map((employee) => {
            //     return {

            //     }
            // })
        })
    } 
}