import React from 'react';
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';

import './style.css';


const LessonFormLayout = ({handleChange, handleSubmit, state}) => (
    <form name="profileForm" className='Form' onSubmit={() => handleSubmit(event)} >
        <Paper >
            <h1>{state.title}</h1>
            <h3>Which day are you reviewing?</h3>
            {/* <DropDownMenu value={1}>
                <MenuItem value={moment()} primaryText="Today" />                       
                <MenuItem value={moment().subtract(1, 'day')} primaryText={moment().subtract(1, 'day').from()} />
                <MenuItem value={moment().subtract(2, 'day')} primaryText={moment().subtract(2, 'day').from()} />
                <MenuItem value={moment().subtract(3, 'day')} primaryText={moment().subtract(3, 'day').from()} />            
            </DropDownMenu>  */}
            <div>
                <h1>How well do you think you did?</h1>
                <h3>( 1-poorly, 5-well )</h3>
                <RadioButtonGroup 
                    name="oneToFiveRadio" 
                    onChange={(event) => handleChange(event)} 
                    valueSelected={state.oneToFiveRadio} 
                >
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
                </RadioButtonGroup>
            </div>
            <div>
                <h1>Do you think the lessons adequately prepared you for the lab?</h1>
                <RadioButtonGroup 
                    name="trueOrFalse"
                    onChange={(event) => handleChange(event)} 
                    valueSelected={state.trueOrFalse} 
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
                </RadioButtonGroup>
            </div>
            <div>
                <h1>What did you get stuck on?</h1>
                <TextField
                    name="input1"
                    value={state.input1}
                    onChange={(event) => handleChange(event)}
                    hintText="Type Here"
                    floatingLabelText="You know..."
                    fullWidth={true}
                    rows={2}
                />
            </div>
            <div>
                <h1>Anything you'd like to do but couldn't?</h1>
                <TextField
                    name="input2"
                    value={state.input2}
                    onChange={(event) => handleChange(event)}  
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
                    name="input3"
                    value={state.input3}
                    onChange={(event) => handleChange(event)}  
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
                    name="input4"
                    value={state.input4}
                    onChange={(event) => handleChange(event)}  
                    hintText="Type Here"
                    multiLine={true}
                    rows={2}
                    floatingLabelText="What do you really think..."
                    fullWidth={true}	  
                />
            </div>
            <div>
                <h1>Rapid takeaway!</h1>
                <TextField
                    name="input5"
                    value={state.input5}
                    onChange={(event) => handleChange(event)}  
                    hintText="Type Here"
                    floatingLabelText="140 characters or less"
                    multiLine={true}
                    rows={2}
                    fullWidth={true}	
                />
            </div>
            <RaisedButton label="Submit" secondary={true} fullWidth={true} type="submit"/>
        </Paper>
    </form>
)

export default LessonFormLayout;
