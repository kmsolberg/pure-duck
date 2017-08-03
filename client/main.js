import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderRoutes from '../imports/start-up/client/routes/';
import Layout from '../imports/ui/components/Layout/';
import Comments from '../imports/ui/containers/Comments/';


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