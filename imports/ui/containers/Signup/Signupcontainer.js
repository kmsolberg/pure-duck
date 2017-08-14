import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import '../../../api/users';
import { loadFormRedirect } from '../../redux/modules/Form';

// import PropTypes from 'prop-types';

import Signup from './Signup';

class SignupContainer extends Component {
    signUpSubmit = (e) => {
        e.preventDefault();
        const email = this.props.signup.values.email;
        const password = this.props.signup.values.password;
        const cohort = this.props.signup.values.cohort;
        const course = this.props.signup.values.course;
        const role = this.props.signup.values.role;
        Meteor.call(
            'registerUser',
            email,
            password,
            cohort,
            course,
            role
        )

        const redirect = this.props.dispatch(loadFormRedirect(true));
    };
    render() {
        const usid= Meteor.userId()
        if (usid) {
            return (
                <Redirect to="/student/1" />
            )
        }
        return (
            <Signup signUp={this.signUpSubmit} />
        )
    };
}

function mapStateToProps(state) {
    return {
        signup: state.form.signupform,
        redirect: state.formRedirect.Redirect
    };
}

export default connect(mapStateToProps)(SignupContainer);
