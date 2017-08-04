import React from 'react';
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';


const StudentProfileLayout = () => (
    <div>
        <Paper>
            <h1>What do you want to review?</h1>
            <RaisedButton label="Project" primary={true} />
            <RaisedButton label="Lesson" primary={true} />
            <RaisedButton label="Topic" primary={true} />
        </Paper>
        <Paper >
            <h1>Past reviews...</h1>
            {/* TODO: foreach here for each personal reviews... */}    
            <Paper>
                <h1>Aloha...</h1>
                <p>...</p>
            </Paper>
        </Paper>
    </div>
)

export default StudentProfileLayout;
