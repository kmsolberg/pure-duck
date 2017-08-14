import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/index.js';
import {
    Paper,
    RadioButton,
    RaisedButton,
    DropDownMenu,
    MenuItem,
    SelectField
} from 'material-ui';

import {
    Field,
    formValueSelector,
    reduxForm
} from 'redux-form';

import {
    TextField,
    RadioButtonGroup
} from 'redux-form-material-ui';

const style = {
    margin: 12,
};

const formSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) =>
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />

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
                    <Field name="cohort" label="Select Your Cohort" component={formSelect} >
                        <MenuItem value={1} primaryText="1" />
                        <MenuItem value={2} primaryText="2" />
                        <MenuItem value={3} primaryText="3" />
                        <MenuItem value={4} primaryText="4" />
                        <MenuItem value={5} primaryText="5" />
                        <MenuItem value={6} primaryText="6" />
                        <MenuItem value={7} primaryText="7" />
                        <MenuItem value={8} primaryText="8" />
                    </Field>
                </div>
                <div className="signupClass">
                    <h4>Class:</h4>
                    <Field name="course" label="Select Your Class" component={formSelect} >
                        <MenuItem value={1} primaryText="WDP" />
                        <MenuItem value={2} primaryText="ADP" />
                    </Field>
                </div>
                <div className="singupRole">
                    <h4>Role:</h4>
                    <Field name="role" component={RadioButtonGroup}>
                        <RadioButton value="true" label="Student" />
                        <RadioButton value="false" label="Instructor" />
                    </Field>
                </div>
                <RaisedButton
                    label="Submit"
                    className="enterButton"
                    type="submit"
                />
            </Paper>
        </form>
    </div >
);

Signup = reduxForm({
    form: 'signupform'
})(Signup)

export default Signup;



