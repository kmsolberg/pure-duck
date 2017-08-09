import React from 'react';
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';

const styles = {
  radioButton: {
    marginBottom: 16,
  }
};

const LessonFormLayout = () => (
    <Paper >
        <h1>Review Lesson</h1>
        <h3>Which day are you reviewing?</h3>
         <DropDownMenu value={1}>
            <MenuItem value={moment()} primaryText="Today" />                       
            <MenuItem value={moment().subtract(1, 'day')} primaryText={moment().subtract(1, 'day').from()} />
            <MenuItem value={moment().subtract(2, 'day')} primaryText={moment().subtract(2, 'day').from()} />
            <MenuItem value={moment().subtract(3, 'day')} primaryText={moment().subtract(3, 'day').from()} />            
        </DropDownMenu> 
        <div>
            <h1>How well do you think you did?</h1>
            <h3>( 1-poorly, 5-well )</h3>
            <RadioButtonGroup name="lesson-1">
                <RadioButton
                    value="1"
                    label="1"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="2"
                    label="2"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="3"
                    label="3"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="4"
                    label="4"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="5"
                    label="5"
                    style={styles.radioButton}
                />
            </RadioButtonGroup>
        </div>
        <div>
            <h1>Do you think the lessons adequately prepared you for the lab?</h1>
            <RadioButtonGroup name="trueOrFalse">
                <RadioButton
                        value={true}
                        label="Yes"
                        style={styles.radioButton}
                />
                <RadioButton
                        value={false}
                        label="No"
                        style={styles.radioButton}
                />
                
            </RadioButtonGroup>
        </div>
        <div>
            <h1>What did you get stuck on?</h1>
            <TextField
                hintText="Type Here"
                floatingLabelText="You know..."
                multiLine={true}
                fullWidth={true}
                rows={2}
            />
        </div>
        <div>
            <h1>Anything you'd like to do but couldn't?</h1>
            <TextField
                hintText="Type Here"
                multiLine={true}
                rows={2}
                floatingLabelText="What do you really think..."
                fullWidth={true}					
            />
        </div>
        <div>
            <h1>Any additions/alterations for this Lesson?</h1>
            <TextField
                hintText="Type Here"
                floatingLabelText="Be honest!"
                multiLine={true}
                rows={2}
                fullWidth={true}					  
            />
        </div>
        <div>
            <h1>One question you wanted to as today but couldn't?</h1>
            <TextField
                hintText="Type Here"
                floatingLabelText="What do you really think?"
                multiLine={true}
                rows={2}
                fullWidth={true}					  
            />
        </div>
        <div>
            <h1>Rapid takeaway!</h1>
            <TextField
                hintText="Type Here"
                floatingLabelText="140 characters or less"
                multiLine={true}
                rows={2}
                fullWidth={true}	
            />
        </div>
        <RaisedButton label="Submit" secondary={true} fullWidth={true} />
    </Paper>
)

export default LessonFormLayout;
