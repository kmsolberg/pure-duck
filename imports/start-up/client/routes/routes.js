import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import Login from '../../../ui/containers/Login/';
import Signup from '../../../ui/containers/Signup/';
import StudentProfile from '../../../ui/containers/Student-Profile/';
import FormSubmission from '../../../ui/containers/FormSubmission/';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (

<Router history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer}/>
      <Route path="lists/:id" component={ListPageContainer}/>
      <Route path="signin" component={AuthPageSignIn}/>
      <Route path="join" component={AuthPageJoin}/>
      <Route path="*" component={NotFoundPage}/>
    </div>
  </Router>
);