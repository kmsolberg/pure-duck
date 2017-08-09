import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const ReviewSelector = ({onChangeAction}) => {
    const cohorts = [ 7, 8 ];
    // const class = [ 'WDP', 'ADP'];
        
    return (
        <div>
            <Paper
                style={style} 
                zDepth={2}
            >
                <SelectField
                    floatingLabelText="Select a cohort"
                    value={cohorts}
                    onChange={(event, index, values) => onChangeAction(values)}  
                >
                    {cohorts.map((cohort) => (
                        <MenuItem
                            key={cohort}
                            primaryText={cohort}
                            value={cohort}
                        />
                    ))}
                </SelectField><br />
                <SelectField
                    floatingLabelText="Select a Class"
                    value={cohorts}
                    onChange={(event, index, values) => onChangeAction(values)}  
                >
                    {cohorts.map((cohort) => (
                        <MenuItem
                            key={cohort}
                            primaryText={cohort}
                            value={cohort}
                        />
                    ))}
                </SelectField><br />
                <SelectField
                    floatingLabelText="Select Review Type"
                    value={cohorts}
                    onChange={(event, index, values) => onChangeAction(values)}  
                >
                    {cohorts.map((cohort) => (
                        <MenuItem
                            key={cohort}
                            primaryText={cohort}
                            value={cohort}
                        />
                    ))}
                </SelectField><br />
                <SelectField
                    floatingLabelText="Select Review"
                    value={cohorts}
                    onChange={(event, index, values) => onChangeAction(values)}  
                >
                    {cohorts.map((cohort) => (
                        <MenuItem
                            key={cohort}
                            primaryText={cohort}
                            value={cohort}
                        />
                    ))}
                </SelectField>
            </ Paper>
        </div>
    )
}

export default ReviewSelector;