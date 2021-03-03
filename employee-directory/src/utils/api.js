import axios from "axios";

export default {

    getEmployees: function () {
        return new Promise((resolve, reject) => {
            axios.get("https://randomuser.me/api/?results=20").then((res) => {
                const employees = res.data.results;
                const results = employees.map((employee) => {
                    return {
                        image: employee.picture.thumbnail,
                        name: `${employee.name.first} ${employee.name.last}`,
                        phone: employee.phone,
                        email: employee.email,
                        dob: employee.dob.date
                    };
                });
                resolve(results);
            }).catch((err) => reject(err));
        })
    }
};