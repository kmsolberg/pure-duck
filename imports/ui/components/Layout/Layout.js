import React from 'react';
import Header from '../Header';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="headerWarpper" >
            <Header className="headerClass" />
        </div>
        <div className="inlayout">
        {children}
        </div>
        <span className="copyright">
            {<h1>© 2017 KBE Corp. All Rights Reserved</h1>}
        </span>
    </div>
);

export default Layout;