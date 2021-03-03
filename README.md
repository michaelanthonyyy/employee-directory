# Employee Directory 
-----------------------
## Table of Contents
1. [Description](#description)
2. [Deployed link](#deployed-link)
3. [Code snippets](#code-snippets)
4. [Licenses](#licenses)
5. [Questions](#questions)

-----------------------
## Description
Employee directory made using JQUERY and randomuser API. A set of employees with all information are displayed on load including their name, contact information as well as their date of birth. 
![Screenshot]()

-----------------------
## Deployed link
[Link](https://michaelanthonyyy.github.io/employee-directory/)

-----------------------
## Code snippets

```javascript
function Table(props) {
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
```
This code maps the given employees from the API randomuser to populate the table component with all employees necessary information. Each element printed in the table was rendered from the information in the json object from the API call. 

-----------------------
## Licenses
This project uses a [MIT License](https://opensource.org/licenses/MIT). 

-----------------------
## Questions
Created by Michael Medina

If you have any questions you can reach me at the following: 


[michaelanthony.medinaa@gmail.com](mailto:michaelanthony.medinaa@gmail.com)  |[LinkedIn](https://www.linkedin.com/in/michaelanthonyy/) | [GitHub](https://github.com/michaelanthonyyy)  |

