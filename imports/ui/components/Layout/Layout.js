import React from 'react';
import Header from '../Header';


import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="headerWarpper" >
            <HeaderCard className="headerClass" />
        </div>
        <div className="appContent">
            {children}
        </div>
        <span className="copyright">
            {<h1>© 2017 Boomtown Corp. All Rights Reserved</h1>}
        </span>
    </div>
    
);

export default Layout;