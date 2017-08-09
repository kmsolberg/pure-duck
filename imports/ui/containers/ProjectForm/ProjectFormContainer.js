import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Forms } from '../../../api/forms';

import ProjectForm from './ProjectForm';
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';



class ProjectFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hi',
            q2: 'Dog'
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // if (this.state.value) {
            const des = this.state.value;
            const input1= this.state.q2; 
            Meteor.call('forms.addProfileFormData', des, input1)
        // }
        // Hint: This will reset the value on each input
        // this.state.value = '';
    };

    handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    // handleChangeInput1 = (event) => {
    //     event.preventDefault();        
    //     this.setState({
    //     });
    // };

    render () {
        return (
            // <ProjectForm projectFormData={(this.handleSubmit, this.handleChange, this.state.value )}/>


            <form name="profileForm" className='Form' onSubmit={this.handleSubmit} >
                <Paper className='Paper'>
                    {/* <h1>Project 1</h1>
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
                        className='RadioButtonGroupclassName' >
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
                        <RadioButtonGroup name="trueOrFalse">
                            <RadioButton
                                value={true}
                                label="Yes"
                                className='radioButton'
                            />
                            <RadioButton
                                value={false}
                                label="No"
                                className= 'radioButton'
                            />
                        </RadioButtonGroup>
                    </div> */}
                    <div>
                        <h1>What did you get stuck on?</h1>
                        <TextField
                            name="value"
                            value={this.state.value}
                            onChange={this.handleChange}
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
                            value={this.state.q2}
                            onChange={this.handleChange}  
                            hintText="Type Here"
                            multiLine={true}
                            rows={2}
                            floatingLabelText="What do you really think..."
                            fullWidth={true}
                        />
                    </div>
                    {/* <div>
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
                    </div> */}
                    <RaisedButton label="Submit" secondary={true} fullWidth={true} type="submit"/>
                </Paper >
            </form>
        )
    }
}

// export default ProjectFormContainer;
export default createContainer(() => {
  Meteor.subscribe('forms');

  return{
    forms: Forms.find().fetch()
  }
}, ProjectFormContainer)