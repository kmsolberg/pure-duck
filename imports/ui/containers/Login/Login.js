import React from 'react';
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

const Login = () => (

        <Paper className="iminpaper">
            <AccountsUIWrapper />
        </Paper>

);

export default Login;
