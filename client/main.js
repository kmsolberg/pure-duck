import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderRoutes from '../imports/start-up/client/routes/';
import Comments from '../imports/ui/containers/Comments/';

const App = () => (
  <MuiThemeProvider>
    {renderRoutes()}
  </MuiThemeProvider>
);


Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});