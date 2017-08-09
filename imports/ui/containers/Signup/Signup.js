import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const Signup = () => (
    <div className="loginformwrapper">
        <Paper className="loginfields" zDepth={1}>
            <h1 className="loginbanner">Register Your Account:</h1>
            <div className="signupName">
                <h2>Your Name:</h2>
                <TextField
                    className="emailfield"
                    hintText="Please Enter Your Name"
                    floatingLabelFixed={true} />
            </div>
            <div className="singupEmail">
                <h2>Email Address:</h2>
                <TextField
                    className="emailfield"
                    hintText="Please Enter Your Email Address"
                    floatingLabelFixed={true} />
            </div>
            <div className="signupFullname">
                <h2>Username:</h2>
                <TextField
                    className="usernamefield"
                    hintText="Please Enter Your Username"
                    floatingLabelFixed={true} />
            </div>
            <div className="signupPassword">
                <h2>Password:</h2>
                <TextField
                    className="passwordfield"
                    hintText="Please Enter Your Username"
                    floatingLabelFixed={true} />
            </div>
            <div className="confirmSignupPassword">
                <h2>Username:</h2>
                <TextField
                    className="confirmpasswordfield"
                    hintText="Please Enter Your Username"
                    floatingLabelFixed={true} />
            </div>
            <div className="signupCohort">
                <h2>Password:</h2>
                <TextField
                    className="password"
                    hintText="Please Enter Your Password"
                    floatingLabelFixed={true} />
            </div>
            <div className="signupCohort">
                <h2>Password:</h2>
                <TextField
                    className="password"
                    hintText="Please Enter Your Password"
                    floatingLabelFixed={true} />
            </div>

            <RaisedButton label="Submit" className="enterButton" type="submit" />
        </Paper>
    </div>);


export default Signup;
