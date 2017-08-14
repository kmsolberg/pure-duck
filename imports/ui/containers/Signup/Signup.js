import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/index.js';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

export default Signup = ({signUp}) => (
    <div className="loginformwrapper">
        <AccountsUIWrapper />
        <Paper className="loginfields" zDepth={1}>
            <form 
                onSubmit={signUp} 
                autoComplete="off"
            >
                <h2 className="loginbanner">Register Your Account:</h2>
                <div className="signupName">
                    <h4>Full Name:</h4>
                    <TextField
                        hintText="Full Name"
                        floatingLabelFixed={true} />
                </div>
                <div className="signupUsername">
                    <h4>Username:</h4>
                    <TextField
                        hintText="Username"
                        type="username"
                        floatingLabelFixed={true} />
                </div>
                <div className="signupEmail">
                    <h4>Email Address:</h4>
                    <TextField
                        hintText="example@email.com"
                        floatingLabelFixed={true} />
                </div>
                <div className="singupPassword">
                    <h4>Password:</h4>
                    <TextField
                        hintText="Password"
                        type="password"
                        floatingLabelFixed={true} />
                </div>
                <div className="signupPasswordConfirm">
                    <h4>Confirm:</h4>
                    <TextField
                        hintText="Confirm Password"
                        floatingLabelFixed={true} />
                </div>
                {/* TODO: */}
                {/* consider changing these to dropdown */}
                <div className="signupClass">
                    <h4>Class:</h4>
                    <TextField
                        hintText="Class"
                        floatingLabelFixed={true} />
                </div>
                <div className="signupCohort">
                    <h4>Cohort:</h4>
                    <TextField
                        hintText="Cohort"
                        floatingLabelFixed={true} />
                </div>
                <RaisedButton
                    label="Submit"
                    className="enterButton"
                    type="submit"
                />
            </form>
        </Paper>
    </div>
);
console.log("clicked");


