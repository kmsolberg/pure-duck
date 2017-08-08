import React from 'react';
import Header from '../Header';

import './style.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="headerWarpper" >
            <Header className="headerClass" />
        </div>
        <div className="inlayout">
            <div className="navlinks">
                <a href="/comments">
                    <p>comments</p>
                </a>
                <a href="/signup">
                    <p>signup</p>
                </a>
                <a href="/login">
                    <p>login</p>
                </a>
                <a href="/submit">
                    <p>submit</p>
                </a>
                <a href="/students">
                    <p>students</p>
                </a>
                <a href="/instructor">
                    <p>instructor</p>
                </a>
            </div>
            {children}
        </div>
        <span className="copyright">
            {<h1>© 2017 KBE Corp. All Rights Reserved</h1>}
        </span>
    </div>
);

export default Layout;