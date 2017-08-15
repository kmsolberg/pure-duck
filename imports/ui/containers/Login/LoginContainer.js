import React, { Component } from 'react';
import {Accounts } from 'meteor/accounts-base';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';

import { LogInAction } from '../../redux/modules/LogIn';

import Login from './Login';

class LoginContainer extends Component {
    submitHandler = () => {
        event.preventDefault();
        const email = this.props.logIn.email;
        const password= this.props.logIn.password;

        Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
            console.log("There was an error:" + error.reason);
        } else {
            FlowRouter.go('/');
        }
        });
    }

render() {
        if (Meteor.userId()) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <Login submitHandler={this.submitHandler}/>
        )
    };
}

function mapStateToProps(state) {
    return {
        logIn: state.logIn.logInUser
    };
}

const logContainer = createContainer(() => {
    Meteor.subscribe('forms');
    return{
        forms: Forms.find().fetch(),
        user: Meteor.users.find().fetch()
    }
}, LoginContainer)

export default connect(mapStateToProps)(logContainer)

