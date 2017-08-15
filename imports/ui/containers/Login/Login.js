import React from 'react';
import { Meteor } from 'meteor/meteor'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';
import {
    TextField,
    RadioButtonGroup
} from 'redux-form-material-ui';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/index';

import {
    Field,
    formValueSelector,
    reduxForm
} from 'redux-form';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

let Login = ({submitHandler}) => (

    <Paper className="loginform">
        <AccountsUIWrapper />
        <div className="loginformwrapper">
            {/* <form  onSubmit={(e)=>submitHandler(e)} autoComplete="off">
                <h2 className="loginbanner">Login:</h2>
                <h4>Username:</h4>
                <Field
                    hintText="Please Enter Your Email"
                    floatingLabelFixed={true}
                    name="email"
                    component={TextField}
                />
                    
                <div className="password">
                    <h4>Password:</h4>
                    <Field
                        hintText="Please Enter Your Password"
                        floatingLabelFixed={true}
                        type="password" 
                        component={TextField}
                        name="password"
                    />
                </div>
                <div className="username">
                    <RaisedButton
                        label="Submit"
                        className="enterButton"
                        type="submit"
                        onSubmit={() => Meteor.loginWithPassword(this.email.value, this.password.value)} />
                   />
                    <a href="/signup">
                        <RaisedButton
                            label="Register"
                            className="linktoregister"
                        />
                    </a>
                </div>
            </form> */}
        </div>
    </Paper >

);

Login = reduxForm({
    form: 'loginform'
})(Login)

export default Login;
