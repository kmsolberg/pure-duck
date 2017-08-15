import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';

const style = {
    margin: 12,
};

const Header = () => (
    <AppBar
        className="appbar"
        showMenuIconButton={false}
        title={
            <a href="/">
                <img className="redlogo" src="../../../../images/RED-Logos-RGB-03-cropped-1.svg" />
            </a>
        }
    >
        {/* <a href="/comments"><p> comments </p></a>
        <a href="/signup"><p> signup </p></a>
        <a href="/login"><p> login </p></a>
        <a href="/submit"><p> submit </p></a>
        <a href="/"><p> student </p></a>
        <a href="/results"><p> results </p></a> */}

        <a href="/">
            <RaisedButton
                className="profilebtn"
                label="Profile"
                style={style}
            />
        </a>
        <RaisedButton
            className="logoutbtn"
            label="Logout"
            style={style}
            onClick={() => Meteor.logout()}
        />
    </AppBar>
);

export default Header;
