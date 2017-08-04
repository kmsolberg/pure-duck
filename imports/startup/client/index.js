import { render } from 'react-dom';
import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import renderRoutes from './routes/';
import Layout from '../../ui/components/Layout';
import Comments from '../../ui/containers/Comments/';

injectTapEventPlugin();

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