import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {
    Paper,
    DropDownMenu,
    MenuItem,
    RadioButton,
    RaisedButton
} from 'material-ui';

import {
    DatePicker,
    RadioButtonGroup,
    TextField
} from 'redux-form-material-ui';

import './style.css';

function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}

const required = value => (value == null ? 'Required' : undefined);

let TopicFormLayout = ({ handleSubmit, pristine, submitting, reset }) => (
    <form name="Topic" className='Form' onSubmit={handleSubmit} >
        <Paper >
            <h3>Topics</h3>
            <div>
                <Field
                    name="TopicDate"
                    component={DatePicker}
                    format={null}
                    hintText="Date of Topic"
                    validate={required}
                />
            </div>
            <div>
                <h3>How well do you think you did?</h3>
                <h4>( 1-poorly, 5-well )</h4>
                <Field className="radiobuttons" name="oneToFiveRadio" component={RadioButtonGroup}>
                    <RadioButton value="1" label="1" />
                    <RadioButton value="2" label="2" />
                    <RadioButton value="3" label="3" />
                    <RadioButton value="4" label="4" />
                    <RadioButton value="5" label="5" />
                </Field>
            </div>
            <div>
                <h3>What did you find difficult about the Topic, and why?</h3>
                <Field
                    name="input1"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="Got stuck?"
                    multiLine
                    rows={3}
                />
            </div>
            <div>
                <h3>What was something you learned?</h3>
                <Field
                    name="input2"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="What do you really think..."
                    multiLine
                    rows={3}
                />
            </div>
            <div>
                <h3>Do you think the Topic adequately prepared you for the lab?</h3>
                <Field name="trueOrFalse" component={RadioButtonGroup}>
                    <RadioButton value="true" label="Yes" />
                    <RadioButton value="false" label="No" />
                </Field>
            </div>
            <div>
                <h3>Any questions you wanted to ask but couldn't?</h3>
                <Field
                    name="input4"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="That one thing you still don't get"
                    multiLine
                    rows={3}
                />
            </div>
            <div>
                <h3>Any other comments about the day?</h3>
                <Field
                    name="input3"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="Be honest!"
                    multiLine
                    rows={3}
                />
            </div>
            <div>
                <h3>Your summary of the day!</h3>
                <Field
                    name="takeaway"
                    component={TextField}
                    hintText="Type Here"
                    floatingLabelText="140 characters or less"
                    rows={1}
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
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

export default TopicFormLayout;
