import { render, ReactDOM } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from '../../ui/redux/store';

import renderRoutes from './routes/';
import Layout from '../../ui/components/Layout';
import Comments from '../../ui/containers/Comments/';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Provider store={ store }>
      <Layout> 
        {renderRoutes()}
      </Layout>
    </ Provider>
  </MuiThemeProvider>
);


Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});