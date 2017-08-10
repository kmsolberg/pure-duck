import React, { Component } from 'react';

import Login from './Login';

class LoginContainer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <Login />
                </div>
            </div>
        )
    }
}

export default LoginContainer;
