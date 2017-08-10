import React from 'react';
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
            <img className="redlogo" src="../../../../images/RED-Logos-RGB-03-cropped-1.svg" />
        }
    >
        <a href="/comments"><p>comments</p></a>
        <a href="/signup"><p>signup</p></a>
        <a href="/login"><p>login</p></a>
        <a href="/submit"><p>submit</p></a>
        <a href="/student"><p>student</p></a>
        <a href="/instructor"><p>instructor</p></a>

        <RaisedButton
            className="logoutbutton"
            label="Logout"
            style={style}
            onClick={() => Meteor.logout()}
        />
    </AppBar>


);

export default Header;
