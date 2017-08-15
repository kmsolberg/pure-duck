import React from 'react';
import { Router, Route,  Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import PrivateRoute from '../../../ui/components/PrivateRoute/';
import Login from '../../../ui/containers/Login/';
import Signup from '../../../ui/containers/Signup/';
import StudentProfile from '../../../ui/containers/StudentProfile/';
import InstructorProfile from '../../../ui/containers/InstructorProfile/';
import ProjectForm from '../../../ui/containers/ProjectForm/';
import TopicForm from '../../../ui/containers/TopicForm/';
import LessonForm from '../../../ui/containers/LessonForm/';
import Comments from '../../../ui/containers/Comments/';
import NotFound from '../../../ui/containers/NotFound/';
import './style.css';

const browserHistory = createBrowserHistory();

const renderRoutes = () => (
 
    <Router history={browserHistory}>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute exact path="/" component={StudentProfile} />
            <PrivateRoute path="/instructor" component={InstructorProfile} />
            <PrivateRoute path="/comments" component={Comments} />
            <PrivateRoute path="/projects" component={ProjectForm} />
            <PrivateRoute path="/topics" component={TopicForm} />
            <PrivateRoute path="/lessons" component={LessonForm} />
            <PrivateRoute component={NotFound} />
        </Switch>
  </Router>
  
);


export default renderRoutes;