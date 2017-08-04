import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import Login from '../../../ui/containers/Login/';
import Signup from '../../../ui/containers/Signup/';
import StudentProfile from '../../../ui/containers/StudentProfile/';
import InstructorProfile from '../../../ui/containers/InstructorProfile/';
import ProjectForm from '../../../ui/containers/ProjectForm/';
import LessonForm from '../../../ui/containers/LessonForm/';
import Comments from '../../../ui/containers/Comments/';

const browserHistory = createBrowserHistory();

const renderRoutes = () => (

<Router history={browserHistory}>
    <div>
      <Route path="/comments" component={Comments}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/projects" component={ProjectForm}/>
      <Route path="/lessons" component={LessonForm}/>
      <Route path="/student/:id" component={StudentProfile}/>
      <Route path="/instructor/:id" component={InstructorProfile}/>

    </div>
  </Router>
);


export default renderRoutes;