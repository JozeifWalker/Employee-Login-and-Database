import React, { Component } from 'react';
import axios from 'axios';


export default class Create extends Component {
    constructor(props) {
        super(props);



        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
        this.onChangeHomephone = this.onChangeHomephone.bind(this);
        this.onChangeCellphone = this.onChangeCellphone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            homephone: '',
            cellphone: '',
            email: ''

        }
    }
    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }
    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }
    onChangeZipCode(e) {
        this.setState({
            zipcode: e.target.value
        });
    }
    onChangeHomephone(e) {
        this.setState({
            homephone: e.target.value
        });
    }
    onChangeCellphone(e) {
        this.setState({
            cellphone: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            homephone: this.state.homephone,
            cellphone: this.state.cellphone,
            email: this.state.email
        };
        axios.post('http://localhost:5000/api/employees/add', obj)
            .then(res => console.log(res.data));
        this.setState({
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            homephone: '',
            cellphone: '',
            email: ''
        })
        window.location.href = "./EmployeeIndex"

    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add A New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>City:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                        />
                    </div>
                    <div className="form-group">
                        <label>State:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.state}
                            onChange={this.onChangeState}
                        />
                    </div>
                    <div className="form-group">
                        <label>Zip Code: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.zipcode}
                            onChange={this.onChangeZipCode}
                        />
                    </div>
                    <div className="form-group">
                        <label>Home Phone: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.homephone}
                            onChange={this.onChangeHomephone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cell Phone: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cellphone}
                            onChange={this.onChangeCellphone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>


        );
    }
}
