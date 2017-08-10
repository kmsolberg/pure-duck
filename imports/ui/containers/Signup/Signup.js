import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const Signup = (register) => (
    <div className="loginformwrapper">
        <Paper className="loginfields" zDepth={1}>
            <h2 className="loginbanner">Register Your Account:</h2>
            <form onSubmit={register} autoComplete="off">
                <div className="signupName">
                    <h4>Name:</h4>
                    <TextField
                        hintText="Please Enter Your Name"
                        floatingLabelFixed={true} />
                </div>
                <div className="registeremail">
                    <h4>Email Address:</h4>
                    <TextField
                        hintText="Please Enter Your Email Address"
                        floatingLabelFixed={true} />
                </div>
                <div className="registerpassword">
                    <h4>Password:</h4>
                    <TextField
                        hintText="Please Enter Your Password"
                        floatingLabelFixed={true} />
                </div>
                <div className="registerpassword">
                    <h4>Username:</h4>
                    <TextField
                        hintText="Please Re-enter Your Password"
                        floatingLabelFixed={true} />
                </div>
                {/* TODO: */}
                {/* consider changing these to dropdown */}
                <div className="registerclass">
                    <h4>Class:</h4>
                    <TextField
                        hintText="Please Enter Your Class"
                        floatingLabelFixed={true} />
                </div>
                <div className="registerohort">
                    <h4>Cohort:</h4>
                    <TextField
                        hintText="Please Enter Your Cohort"
                        floatingLabelFixed={true} />
                </div>

                <RaisedButton label="Submit" className="enterButton" type="submit" />
            </form>
        </Paper>
    </div>
);
console.log("clicked");

export default Signup;
