import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';

import ProjectForm from './ProjectForm';
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';


class ProjectFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Project 1',
            value: 'Sense of reality',
            q2: 'Nipple Assault',
            input3: 'Anyone could see my unicorn',
            input4: 'Pull it Out',
            form: 'Project'
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // if (this.state.value) {
            const title = this.state.title;
            const form = this.state.form;
            const oneToFiveRadio = parseInt(this.state.oneToFiveRadio);
            const trueOrFalse = this.state.trueOrFalse;
            const input1 = this.state.value;
            const input2= this.state.q2;
            const input3= this.state.input3;
            const input4= this.state.input4;
            Meteor.call('forms.addProfileFormData', title, form, oneToFiveRadio, trueOrFalse, input1, input2, input3, input4)
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
            <ProjectForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state}/>
        )
    }
}

// export default ProjectFormContainer;
export default createContainer(() => {
    Meteor.subscribe('forms');
    return{
        forms: Forms.find().fetch()
    }
}, ProjectFormContainer)