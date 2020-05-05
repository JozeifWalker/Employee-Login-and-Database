import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './TableRow';


export default class EmployeeIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }
    componentDidMount() {

        axios.get('http://localhost:5000/api/employees/')
            .then(response => {
                this.setState({ employees: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.employees.map(function (object, i) {
            return <TableRow obj={object} key={i} />;

        });
    }

    render() {
        return (
            <div>

                <h3 align="center">Employee List</h3>
                <Link to="/dashboard" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to
              Dashboard
            </Link>

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Home Phone</th>
                            <th>Cell Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}

                    </tbody>
                    <Link to={'./Create'} className="btn btn-primary">Add</Link>
                </table>
            </div>
        );
    }

}
