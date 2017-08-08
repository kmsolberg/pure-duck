import React from 'react';
import AppBar from 'material-ui/AppBar';
import './style.css';
// import logo from './redlogo.svg'
// import RaisedButton from 'material-ui/RaisedButton';

const Header = () => (
    <AppBar
        className="appbar"
        showMenuIconButton={false}
        title={
            <img className="redlogo" src="../../../..//images/RED-Logos-RGB-03-cropped-1.svg" />
        }
    >
    </AppBar>
);

export default Header;
