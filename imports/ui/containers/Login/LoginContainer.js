import React, { Component } from 'react';
import {Accounts } from 'meteor/accounts-base';
import {Redirect} from 'react-router-dom';

import Login from './Login';

class LoginContainer extends Component {
    // render() {
//         return (
//             <div className="row">
//                 <div className="col-md-4 col-md-offset-4">
//                     <Login />
//                 </div>
//             </div>
//         )
//     }
// }

render() {
        const usid= Meteor.userId()
        if (usid) {
            return (
                <Redirect to="/student/1" />
            )
        }
        return (
            <Login />
        )
    };
}

export default LoginContainer;
