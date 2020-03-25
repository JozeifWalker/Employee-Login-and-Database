import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (

            <div style={{ height: "75vh" }} className="container valign-wrapper">

                <div className="row">
                    <div className="col s12 center-align">
                        <h1>
                            <button style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                            }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            ><Link to="/EmployeeIndex">Employees</Link></button>
                        </h1>
                        <h2>
                            <button style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                            }}
                                onClick={this.onLogoutClick}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >Logout</button>
                        </h2>

                    </div>
                </div>
            </div>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);