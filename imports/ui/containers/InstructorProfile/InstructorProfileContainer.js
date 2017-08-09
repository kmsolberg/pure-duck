import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms } from '../../../api/forms.js';
import InstructorProfile from './InstructorProfile';
import ReviewSelector from '../../components/ReviewSelector';

import './style.css';
class InstructorProfileContainer extends Component {
    render () {
        return (
            <div className="instructor-container">
                <div className="instructor-select">
                    <h2>Select reviews:</h2>
                    <ReviewSelector />
                </div>
                <InstructorProfile 
                    forms={this.props.forms} 
                    className="review-cards"
                />
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

export default InstructorProfileContainer = createContainer(() => {
    return {
        forms: Forms.find({}).fetch(),
    };
}, InstructorProfileContainer);