import React from 'react';
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';

const styles = {
    radioButton: {
        marginBottom: 16,
        width: 50,
    },
    RadioButtonGroupStyle: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around',
    },
    Form: {
        display: `flex`,
        justifyContent: `center`,
    },
    Paper: {
        width: `850px`
    }
};

// insert
addProfileFormData = (event) => {
event.preventDefault();
// if (this.toDoInput.value) {ToDos.insert({ title: this.toDoInput.value, complete: false, owner: this.props.currentUser._id});}
if (this.toDoInput.value) {
    Meteor.call('todos.addProfileFormData', this.toDoInput.value)
}
this.toDoInput.value = '';
}

const ProjectFormLayout = () => (
    <form name="profileForm" style={styles.Form}>
        <Paper style={styles.Paper}>
            <h1>Project 1</h1>
            <DropDownMenu value={1}>
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>
            <div>
                <h1>How well do you think you did?</h1>
                <h3>( 1-poorly, 5-well )</h3>
                <RadioButtonGroup name="oneToFive" 
                style={styles.RadioButtonGroupStyle} >
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
                <h1>Do you feel like the lessons built toward the project?</h1>
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
                    value={this.state.textFieldValue}
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
                <h1>Any additions/alterations for this project?</h1>
                <TextField
                    hintText="Type Here"
                    floatingLabelText="Be honest!"
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
                <h1>Any additions/alterations for this project?</h1>
                <TextField
                    hintText="Type Here"
                    floatingLabelText="Be honest!"
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
            <RaisedButton label="Submit" secondary={true} fullWidth={true} onClick={console.log("Test")} />
        </Paper >
    </form>
)

export default ProjectFormLayout;
