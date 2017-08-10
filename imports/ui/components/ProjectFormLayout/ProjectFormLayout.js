import React, { Component } from 'react';
import { Forms } from '../../../api/forms';
 
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';

import './style.css';

const ProjectFormLayout = ({handleChange, handleSubmit, state}) => (
    <form name="profileForm" className='Form' onSubmit={() => handleSubmit(event)} >
        <Paper className='Paper'>
            <h1 name="title">{state.title}</h1>
            {/* <DropDownMenu value={1}>
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu> */}
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
                <h1>Do you feel like the lessons built toward the project?</h1>
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
                    name="value"
                    value={state.value}
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
                    name="q2"                          
                    value={state.q2}
                    onChange={(event) => handleChange(event)}  
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
                <h1>Rapid takeaway!</h1>
                <TextField
                    name="input4"                          
                    value={state.input4}
                    onChange={(event) => handleChange(event)}  
                    hintText="Type Here"
                    floatingLabelText="140 characters or less"
                    multiLine={true}
                    rows={2}
                    fullWidth={true}
                />
            </div> 
            <RaisedButton label="Submit" secondary={true} fullWidth={true} type="submit"/>
        </Paper >
    </form>
)

export default ProjectFormLayout;


