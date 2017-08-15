import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';
import PropTypes from 'prop-types';

import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

import StudentProfile from './StudentProfile';
import ReviewCardList from '../../components/ReviewCardList/';

class StudentProfileContainer extends Component {
    render () {
        return (
            <div>
                {(!this.props.currentUserId) ? (
                    <div className="logged-out-message">
                    <p>Please sign in to see your reviews.</p>
                    </div>
                )
                :
                <div className="student-profile">
                    <StudentProfile forms={this.props.forms} ReviewCount={this.props.ReviewCount}/>
                    <ReviewCardList forms={this.props.forms} />
                </div>
                }
            </div>
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
    currentUserId: Meteor.userId()
  }
}, StudentProfileContainer)
