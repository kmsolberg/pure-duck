import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import {
    Paper,
    MenuItem,
    RadioButton,
    RaisedButton,
    SelectField
} from 'material-ui';

import {
    DatePicker,
    RadioButtonGroup,
    TextField
} from 'redux-form-material-ui';

import './style.css';

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

const appDevTopics = [
    'Redux',
    'Node',
    'Express',
    'PostgreSQL',
    'Meteor',
    'TDD',
    'React Native',
    'Real Database'
]

const webDevTopics = [
    'CSS',
    'Responsive Web Design',
    'Flexbox',
    'JQuery',
    'Ajax, JSON, APIs',
    'GULP',
    'SASS',
    'Performance & Optimization',
    'Accessibility',
    'Javascript/ES.next',
    'OOP',
    'PHP',
    'WordPress',
    'Angular'
]

const required = value => (value == null ? 'Required' : undefined);

let TopicFormLayout = ({ handleSubmit, pristine, submitting, reset, classSelectValue }) => (
    <form name="Topic" className='Form' onSubmit={handleSubmit} >
        <Paper className="topicform">
            <h2>Topics</h2>

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
                        name="topicSelect"
                        component={formSelect}
                        label="Which topic do you want?"
                    >
                        {appDevTopics.map((project) => (
                            <MenuItem
                                key={project}
                                primaryText={project}
                                value={project}
                            />
                        ))}
                    </Field>
                </div>
            }

            {classSelectValue === 'WDP' &&
                <div>
                    <Field
                        name="topicSelect"
                        component={formSelect}
                        label="Which topic do you want?"
                    >
                        {webDevTopics.map((project) => (
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
                <h3>What do you feel is your level of understanding?</h3>
                <h5>( 1-poorly, 5-well )</h5>
                <Field className="radiobuttons" name="oneToFiveRadio" component={RadioButtonGroup}>
                    <RadioButton value="1" label="1" />
                    <RadioButton value="2" label="2" />
                    <RadioButton value="3" label="3" />
                    <RadioButton value="4" label="4" />
                    <RadioButton value="5" label="5" />
                </Field>
            </div>
            <div>
                <h3>Did you encounter any specific hurdles with this topic?</h3>
                <Field
                    name="input1"
                    component={TextField}
                    hintText="Type Here"
                    errorText="This field is required"
                    floatingLabelText="Got stuck?"
                    multiLine
                    rows={1}
                />
            </div>
            <div>
                <h3>Is there anything that needs to be followed up on?</h3>
                <Field
                    name="input2"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="What do you really think..."
                    multiLine
                    rows={1} 
                />
            </div>
            <div>
                <h3>Can you prove that you understand it? Prove it!</h3>
                <Field
                    name="input3"
                    component={TextField}
                    hintText="Type Here"
                    errorText="This field is required"                    
                    floatingLabelText="What do you really think..."
                    multiLine
                    rows={1} 
                />
            </div>
            <div>
                <h3>Explain why we're teaching this to you!</h3>
                <Field
                    name="input4"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="What do you really think..."
                    errorText="This field is required"                    
                    multiLine
                    rows={1} 
                />
            </div>
            <div>
                <h3>Do you believe this topic adequetly prepared you for the project?</h3>
                <Field className="formyesno" name="trueOrFalse" component={RadioButtonGroup}>
                    <RadioButton value="true" label="Yes" />
                    <RadioButton value="false" label="No" />
                </Field>
            </div>
            <div>
                <h3>Any other feedback concerning this topic?</h3>
                <Field
                    name="input5"
                    component={TextField}
                    hintText="Type Here"
                    errorText="This field is required"                    
                    floatingLabelText="That one thing you still don't get"
                    multiLine
                    rows={1}
                />
            </div>
            <div>
                <button
                    type="submit"
                    disabled={pristine || submitting}>Submit
                </button>
                <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                >
                    Clear
                </button>
            </div>
        </Paper>
    </form>
)

TopicFormLayout = reduxForm({
    form: 'forms'
})(TopicFormLayout)

const selector = formValueSelector('forms')

TopicFormLayout = connect(state => {
    const classSelectValue = selector(state, 'classSelect')
    return {
        classSelectValue,
    }
})(TopicFormLayout)

export default TopicFormLayout;
