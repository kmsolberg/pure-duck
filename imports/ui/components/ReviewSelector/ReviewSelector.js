import React, {Component} from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const cohortSelect = ({
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

const classSelect = ({
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


let ReviewSelector = ({onChangeAction, cohortSelectValue}) => {
    const cohorts = [ 7, 8 ];
        
    return (
        <div>
            <Paper
                style={style} 
                zDepth={2}
            >
                <div>
                    <Field
                        name="cohortSelect"
                        component={cohortSelect}
                        label="Select Cohort"
                    >
                        {cohorts.map((cohort) => (
                            <MenuItem
                                key={cohort}
                                primaryText={cohort}
                                value={cohort}
                            />
                        ))}
                    </Field>
                </div>
                {cohortSelectValue &&
                    <div>
                        <Field
                            name="classSelect"
                            component={classSelect}
                            label="Select a Class"
                        >
                            <MenuItem value="ADP" primaryText="App Development" />
                            <MenuItem value="WDP" primaryText="Web Development" />
                        </Field>
                    </div>
                }
            </ Paper>
        </div>
    )
}

ReviewSelector = reduxForm({
  form: 'reviewSelector'
})(ReviewSelector)

const selector = formValueSelector('reviewSelector')

ReviewSelector = connect(state => {
    const cohortSelectValue = selector(state, 'cohortSelect')
    return {
        cohortSelectValue
    }
})(ReviewSelector)

export default ReviewSelector;