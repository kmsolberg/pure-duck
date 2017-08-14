import React from 'react';
import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton, Card, CardActions, CardHeader, CardText } from 'material-ui';
import { Link } from 'react-router-dom';


const StudentProfileLayout = ({forms, ReviewCount}) => (
    <div>
        <Paper>
            <h1>What do you want to review?</h1>
            <Link to="/projects">
                <RaisedButton label="Project" primary={true} />
            </Link>
            <Link to="/lessons">            
                <RaisedButton label="Lesson" primary={true} />
            </Link>   
            <Link to="/topics">            
                <RaisedButton label="Topic" primary={true} />
            </Link>
        </Paper>
        <Paper >
            <h1>{ReviewCount} Past {ReviewCount === 1 ? 'Review' : 'Reviews'}...</h1>   
            {forms.map((form, index) => (
                <Card key={index} className='reviewCard' style={{backgroundColor: 'skyBlue', margin: `25px 0`}}>
                    <CardText style={{color: 'white'}}>
                        <h5>Form-Type: {form.form}</h5>
                        <h5>Form: {form.title}</h5>
                        <p>I feel like I did {form.oneToFiveRadio} /5</p>
                    </CardText>
                </Card>
            ))}
        </Paper>
    </div>
)

export default StudentProfileLayout;
