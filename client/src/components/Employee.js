import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class Employee extends Component {
    // state = {
    //     employee: {
    //         reviews: [{}]
    //     }
    //   };

    //   componentDidMount() {
    //     this.getAllEmployers()          
    //   }

    //   getAllEmployers = () => {
    //     console.log("Hello");
    //     const employerId = this.props.match.params.employerId
    //     // const url = `/api/employers/${employerId}/employees/${employeeId}`;
    //     axios.get(url).then(res => {
    //       console.log(res.data);
    //       this.setState({ employer: res.data });
    //     });
    //   };
    

    render() {
        return (
            <div>
                {/* <h2>Hello {this.state.employer.fullName} from your home page</h2> */}
                <h4>Your reviews are below:</h4>
                {/* {this.state.employer.employees.map((employee) => (
                    <div key={employee._id}>
                    <Link to={`/employees/${employee._id}`}>{employee.fullName}</Link></div>
                ))} */}
            </div>
        );
    }
}

export default Employee;