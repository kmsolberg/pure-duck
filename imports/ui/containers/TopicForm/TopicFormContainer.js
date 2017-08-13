import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';
import PropTypes from 'prop-types';

import TopicForm from './TopicForm';

class TopicFormContainer extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        const date = new Date().toDateString();
        const form = 'Topic';
        const oneToFiveRadio = parseInt(this.props.values.values.oneToFiveRadio);
        const trueOrFalse = this.props.values.values.trueOrFalse;
        const input1= this.props.values.values.input1;
        const input2= this.props.values.values.input2;
        const input3= this.props.values.values.input3;
        const input4= this.props.values.values.input4;
        const input5= this.props.values.values.input5;
        Meteor.call(
            'forms.addProfileFormData', 
            date, 
            form, 
            oneToFiveRadio, 
            trueOrFalse, 
            input1, 
            input2, 
            input3, 
            input4, 
            input5
        )
    };

    render () {
        return (
            <TopicForm handleSubmit={this.handleSubmit} />
        )
    }
}

TopicFormContainer.propTypes = {
  forms: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        values: state.form.forms,
    };
}

const TopicContainer = createContainer(() => {
    Meteor.subscribe('forms');
    return{
        forms: Forms.find().fetch()
    }
}, TopicFormContainer)

export default connect(mapStateToProps)(TopicContainer)