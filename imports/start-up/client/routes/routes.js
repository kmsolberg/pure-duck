import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import Login from '../../../ui/containers/Login/';
import Signup from '../../../ui/containers/Signup/';
import StudentProfile from '../../../ui/containers/StudentProfile/';
import InstructorProfile from '../../../ui/containers/InstructorProfile/';
import FormSubmission from '../../../ui/containers/FormSubmission/';
import Comments from '../../../ui/containers/Comments/index.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (

<Router history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer}/>
      <Route path="comments" component={Comments}/>
      <Route path="signup" component={Signup}/>
      <Route path="login" component={Login}/>
      <Route path="submit" component={FormSubmission}/>
      <Route path="student/:id" component={StudentProfile}/>
      <Route path="instructor/:id" component={InstructorProfile}/>          
      <Route path="*" component={NotFoundPage}/>
    </div>
  </Router>
);