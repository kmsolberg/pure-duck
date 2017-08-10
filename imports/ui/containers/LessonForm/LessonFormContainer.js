import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';

import LessonForm from './LessonForm';

class LessonFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Review Lesson React-Meteor',
            input1: 'Sense of reality',
            input2: 'Nipple Assault',
            input3: 'Anyone could see my unicorn',
            input4: 'Pull it Out',
            input5: 'Welcome Back Trevor!',
            form: 'Lesson'
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // if (this.state.value) {
            const title = this.state.title;
            const form = this.state.form;
            const oneToFiveRadio = parseInt(this.state.oneToFiveRadio);
            const trueOrFalse = this.state.trueOrFalse;
            const input1 = this.state.input1;
            const input2= this.state.input2;
            const input3= this.state.input3;
            const input4= this.state.input4;
            const input5= this.state.input5;
            Meteor.call('forms.addProfileFormData', title, form, oneToFiveRadio, trueOrFalse, input1, input2, input3, input4, input5)
        // }
        // Hint: This will reset the value on each input
        // this.state.value = '';
    };
    

    handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    render () {
        return (
            <LessonForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state}/>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('forms');
    return{
        forms: Forms.find().fetch()
    }
}, LessonFormContainer)
