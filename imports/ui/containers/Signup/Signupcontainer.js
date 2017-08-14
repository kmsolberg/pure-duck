import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import '../../../api/users';

import Signup from './Signup';

class SignupContainer extends Component {
    signUp = (e) => {
        e.preventDefault()
        Meteor.call (
            'registerUser'
        )
    }
    render () {
        return (
            <Signup signUp={this.signUp}/>
        )
    }
}

export default SignupContainer;
