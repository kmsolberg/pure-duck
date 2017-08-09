import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms } from '../../../api/forms.js';
import InstructorProfile from './InstructorProfile';

class InstructorProfileContainer extends Component {
    render () {
        return (
            <InstructorProfile forms={this.props.forms} />
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