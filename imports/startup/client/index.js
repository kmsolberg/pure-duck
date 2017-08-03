import { render } from 'react-dom';
import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderRoutes from './routes/';
import Layout from '../../ui/components/Layout';
import Comments from '../../ui/containers/Comments/';


const App = () => (
  <MuiThemeProvider>
     <Layout> 
      {renderRoutes()}
     </Layout> 
  </MuiThemeProvider>
);


Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});