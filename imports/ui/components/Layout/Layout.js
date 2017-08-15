import React, { Component } from 'react';
import Header from '../Header';
import AccountsUIWrapper from '../../components/AccountsUIWrapper/index';


import './style.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="headerWarpper" >
            <Header className="headerClass" />
        </div>
        <div className="inlayout">
            {children}
        </div>
        <span className="copyright">
            <h1>© 2017 KBE Corp. All Rights Reserved</h1>
        </span>
    </div>
);

export default Layout;

// export deafult class Layout extends Componenet {
//     constructor(props){
//         super(props);
//         this.state = this.getMeteorData();
//         this.logout = this.logout.bind(this);
//     }
// }