import React from 'react';
import { Meteor } from 'meteor/meteor'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

import AccountsUIWrapper from '../../components/AccountsUIWrapper/index.js';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const Login = (login) => (

    <Paper className="iminpaper">
        <AccountsUIWrapper />
        <div className="loginformwrapper">
            <Paper className="loginfields" zDepth={1}>
                <form onSubmit={login} autoComplete="off">
                    <h2 className="loginbanner">Login:</h2>
                    <div className="username">
                        <h4>Username:</h4>
                        <TextField
                            hintText="Please Enter Your Name"
                            floatingLabelFixed={true} />
                    </div>
                    <div className="password">
                        <h4>Password:</h4>
                        <TextField
                            hintText="Please Enter Your Password"
                            floatingLabelFixed={true} />
                    </div>
                    <RaisedButton
                        label="Submit"
                        className="enterButton"
                        type="submit"
                        onSubmit={() => Meteor.loginWithPassword("test@user.com", "password")} />
                    <RaisedButton
                        label="Register"
                        className="linktoregister"
                        type="link"
                    />

                </form>
            </Paper>
        </div>
    </Paper>

);

export default Login;
