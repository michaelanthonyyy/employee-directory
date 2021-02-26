import axios from "axios";

export default {
    GetEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=30")
    }
}