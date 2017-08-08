import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const Login = () => (


    <div className="loginformwrapper">
        <Paper className="loginfields" style={style} zDepth={1}>
        <h1 className="loginbanner">Please login:</h1>
            
            <h2>Username:</h2>
            <TextField
                className="username"
                hintText="Please Enter Your Username"
                floatingLabelFixed={true}
            />
            <h2>Password:</h2>
            <TextField
                className="password"
                hintText="Please Enter Your Password"
                floatingLabelFixed={true}
            />
            <RaisedButton className="enterButton" type="submit">
                <h1>Enter</h1>
            </RaisedButton>
        </Paper>
    </div>
);

export default Login;
