import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './style.css';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const Login = () => (
    <div className="theOneAbovePaper">
        <Paper  className="ffs" style={style} zDepth={1}>
            <TextField
                className="testname"
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
            />
        </Paper>
    </div>
);

export default Login;
