import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import renderRoutes from '../imports/start-up/client/routes/';
import Comments from '../imports/ui/containers/Comments/';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});