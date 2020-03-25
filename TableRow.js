import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.firstname}
                </td>
                <td>
                    {this.props.obj.lastname}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {this.props.obj.city}
                </td>
                <td>
                    {this.props.obj.state}
                </td>
                <td>
                    {this.props.obj.zipcode}
                </td>
                <td>
                    {this.props.obj.homephone}
                </td>
                <td>
                    {this.props.obj.cellphone}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <Link to={'./Edit/' + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;