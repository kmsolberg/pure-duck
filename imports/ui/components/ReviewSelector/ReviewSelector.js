import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ReviewSelector = () => {
    const cohorts = [ 7, 8 ];
    // const class = [ 'WDP', 'ADP'];
        
    return (
        <div>
            <SelectField
                floatingLabelText="Select a cohort"
                value={cohorts}
                // onChange={(event, index, values) => dispatch(onChangeAction(values))} 
            >
                {cohorts.map((cohort) => (
                    <MenuItem
                        key={cohort}
                        primaryText={cohort}
                        value={cohort}
                    />
                ))}
            </SelectField>
        </div>
    )
}

export default ReviewSelector;