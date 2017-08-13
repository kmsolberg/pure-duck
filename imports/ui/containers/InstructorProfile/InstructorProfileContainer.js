import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';

import { Forms } from '../../../api/forms.js';
import InstructorProfile from './InstructorProfile';
import ReviewSelector from '../../components/ReviewSelector';

import './style.css';
class InstructorProfileContainer extends Component {

    filterReviews = (values) => {
        Meteor.call('forms.filterReviews', this.props.values.values, (error, result) => {
            if(error) {
                alert('error!')
            } else {
                const filteredReviews = result;
            }
        });
    }

    render () {
        return (
            <div className="instructor-container">
                <div className="instructor-select">
                    <h2>Select reviews:</h2>
                    <ReviewSelector 
                        handleSubmit={this.filterReviews}
                    />
                </div>
                 {this.filteredReviews &&
                    <InstructorProfile 
                        forms={this.filteredReviews} 
                        className="review-cards"
                    />
                } 
                <h2>No reviews selected!</h2>
            </div>
        )
    }
}

InstructorProfileContainer.defaultProps = {
    forms: []
}

InstructorProfileContainer.propTypes = {
    forms: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        values: state.form.reviewSelector,
    };
}

InstructorContainer = createContainer(() => {
    Meteor.subscribe('forms');

    return {
        forms: Forms.find({}).fetch(),
    };
}, InstructorProfileContainer);

export default connect(mapStateToProps)(InstructorContainer)