import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import '../../../api/users';

import Signup from './Signup';

class SignupContainer extends Component {
    render () {
        signUp = (e) => {
            e.preventDefault()

            Meteor.call (
                'registerUser'
            )

            // Accounts.createUser({
            //     email : 'lauyoyo12@gmail.com',
            //     password : 'laulau',
            //     profile: {
            //         cohort: '9',
            //         class: 'WDP'
            //     }
            // })
        }
        return (
            <Signup signUp={this.signUp}/>
        )
    }
}

export default SignupContainer;
