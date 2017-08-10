import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';
import PropTypes from 'prop-types';

import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

import StudentProfile from './StudentProfile';

class StudentProfileContainer extends Component {
    render () {
        return (
            <StudentProfile forms={this.props.forms} ReviewCount={this.props.ReviewCount}/>
        )
    }
}

StudentProfileContainer.defaultProps = {
    forms: []
}

StudentProfileContainer.propTypes = {
  forms: PropTypes.array.isRequired,
  ReviewCount: PropTypes.number.isRequired,
};


export default createContainer(() => {
  Meteor.subscribe('forms');
  return{
    forms: Forms.find({}, { sort: { createdAt: -1 } }).fetch(),
    ReviewCount: Forms.find({ checked: { $ne: true } }).count(),
  }
}, StudentProfileContainer)
