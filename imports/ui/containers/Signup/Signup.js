import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/index.js';
import { Paper, RaisedButton } from 'material-ui';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const style = {
    margin: 12,
};

let Signup = ({ signUp }) => (
    <div className="loginformwrapper">
        <AccountsUIWrapper />
        <form
            onSubmit={signUp}
            autoComplete="off"
        >
            <Paper className="loginfields" zDepth={1}>
                <h2 className="loginbanner">Register Your Account:</h2>
                {/* <div className="signupName">
                    <h4>Full Name:</h4>
                    <Field
                        hintText="Full Name"
                        floatingLabelFixed={true} />
                </div> */}
                {/* <div className="signupUsername">
                    <h4>Username:</h4>
                    <Field
                        hintText="Username"
                        type="username"
                        floatingLabelFixed={true} />
                </div> */}
                <div className="signupEmail">
                    <h4>Email Address:</h4>
                    <Field
                        name="email"
                        component={TextField}
                        hintText="example@email.com"
                        floatingLabelFixed={true} />
                </div>
                <div className="singupPassword">
                    <h4>Password:</h4>
                    <Field
                        name="password"
                        component={TextField}
                        hintText="Password"
                        type="password"
                        floatingLabelFixed={true} />
                </div>
                {/* TODO: look up confirm password */}
                {/* <div className="signupPasswordConfirm">
                    <h4>Confirm:</h4>
                    <Field
                        name="passwordconfirm"
                        hintText="Confirm Password"
                        floatingLabelFixed={true} />
                </div> */}
                {/* TODO: */}
                {/* consider changing these to dropdown */}
                <div className="signupCohort">
                    <h4>Cohort:</h4>
                    <Field
                        name="cohort"
                        component={TextField}
                        hintText="Cohort"
                        floatingLabelFixed={true} />
                </div>
                <div className="signupClass">
                    <h4>Class:</h4>
                    <Field
                        name="course"
                        component={TextField}
                        hintText="Class"
                        floatingLabelFixed={true} />
                </div>
                <div className="singupRole">
                    <h4>Role:</h4>
                    <Field
                        name="role"
                        component={TextField}
                        hintText="Class"
                        floatingLabelFixed={true} />
                </div>
                <RaisedButton
                    label="Submit"
                    className="enterButton"
                    type="submit"
                />
            </Paper>
        </form>
    </div>
);

Signup = reduxForm({
form: 'signupform'
})(Signup)

export default Signup;



