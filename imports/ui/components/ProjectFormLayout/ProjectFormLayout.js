import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
 
import { Paper, MenuItem, RadioButton, RaisedButton, SelectField } from 'material-ui';
import {
    RadioButtonGroup,
    TextField
} from 'redux-form-material-ui';

import './style.css';

const appDevProjects = [
    'Boomtown',
    'Meteor',
    'Coding Interview',
    'r10',
    'Community Project'
];

const webDevProjects = [
    'Aloha',
    'Instanews',
    'Pong',
    'Inhabitent',
    'Mars Colony',
    'Community Project'
];

const formSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) =>
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />

let ProjectFormLayout = ({ handleSubmit, pristine, submitting, reset, classSelectValue }) => (
    <form name="profileForm" className='Form' onSubmit={handleSubmit} >
        <Paper className='Paper'>
            <h1 name="title">Project</h1>
            <div>
                <Field
                    name="classSelect"
                    component={formSelect}
                    label="Select a Class"
                >
                    <MenuItem value="ADP" primaryText="App Development" />
                    <MenuItem value="WDP" primaryText="Web Development" />
                </Field>
            </div>

            {classSelectValue==='ADP' &&
                <div>
                    <Field
                        name="titleSelect"
                        component={formSelect}
                        label="Which project are you reviewing?"
                    >
                        {appDevProjects.map((project) => (
                            <MenuItem
                                key={project}
                                primaryText={project}
                                value={project}
                            />
                        ))}
                    </Field>
                </div>
            }
            {classSelectValue==='WDP' &&
                <div>
                    <Field
                        name="titleSelect"
                        component={formSelect}
                        label="Which project are you reviewing?"
                    >
                        {webDevProjects.map((project) => (
                            <MenuItem
                                key={project}
                                primaryText={project}
                                value={project}
                            />
                        ))}
                    </Field>
                </div>
            }

            <div>
                <h1>How well do you think you did?</h1>
                <h3>( 1-poorly, 5-well )</h3>
                <Field className="radiobuttons" name="oneToFiveRadio" component={RadioButtonGroup}>
                    <RadioButton
                        value="1"
                        label="1"
                        className='radioButton'
                    />
                    <RadioButton
                        value="2"
                        label="2"
                        className='radioButton'
                    />
                    <RadioButton
                        value="3"
                        label="3"
                        className='radioButton'
                    />
                    <RadioButton
                        value="4"
                        label="4"
                        className='radioButton'
                    />
                    <RadioButton
                        value="5"
                        label="5"
                        className='radioButton'
                    />
                </Field>
            </div>
            <div>
                <h1>Do you feel like the lessons built toward the project?</h1>
                <Field className="radiobuttons" name="trueOrFalse" component={RadioButtonGroup}
                >
                    <RadioButton
                        value="true"
                        label="Yes"
                        className='radioButton'
                    />
                    <RadioButton
                        value="false"
                        label="No"
                        className= 'radioButton'
                    />
                </Field>
            </div> 
            <div>
                <h1>What did you get stuck on?</h1>
                <Field
                    name="input1"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="You know..."
                    fullWidth={true}
                    rows={2}
                />
            </div>
            <div>
                <h1>Anything you'd like to do but couldn't?</h1>
                <Field
                    name="input2"
                    component={TextField}
                    hintText="Type Here"
                    multiLine={true}
                    rows={2}
                    floatingLabelText="What do you really think..."
                    fullWidth={true}
                />
            </div>
            <div>
                <h1>Any additions/alterations for this project?</h1>
                <Field
                    name="input3"  
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="Be honest!"
                    multiLine={true}
                    rows={2}
                    fullWidth={true}
                />
            </div>
            <div>
                <h3>What aspects did you enjoy about the project?</h3>
                <Field
                    name="input4"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="You know you loved it!"
                    rows={2}
                />
            </div>
            <div>
                <h1>Rapid takeaway!</h1>
                <Field
                    name="input5"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="140 characters or less"
                    multiLine={true}
                    rows={2}
                    fullWidth={true}
                />
            </div> 
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
            >
                Clear
            </button>
        </Paper >
    </form>
)
ProjectFormLayout = reduxForm({
    form: 'forms'
})(ProjectFormLayout)

const selector = formValueSelector('forms')

ProjectFormLayout = connect(state => {
    const classSelectValue = selector(state, 'classSelect')
    return {
        classSelectValue,
    }
})(ProjectFormLayout)

export default ProjectFormLayout;


