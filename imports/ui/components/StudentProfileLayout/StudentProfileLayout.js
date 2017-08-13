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
            {forms.map((todo, index) => (
                <Card key={index} className='reviewCard' style={{backgroundColor: 'skyBlue', margin: `25px 0`}}>
                    <CardText style={{color: 'white'}}>
                        <h5>Form-Type: {todo.form}</h5>
                        <h5>Date: {todo.date}</h5>
                        <p>Owner: {todo.owner}</p>
                        <p>Created On: {todo.createdAt}</p>  
                        <p>scale 1-5: {todo.oneToFiveRadio}</p>
                        <p>T / F: {todo.trueOrFalse}</p>
                        <p>input1: {todo.input1}</p>
                        <p>input2: {todo.input2}</p>
                        <p>input3: {todo.input3}</p>
                        <p>input4: {todo.input4}</p>
                        <p>input5: {todo.input5}</p>
                    </CardText>
                </Card>
            ))}
        </Paper>
    </div>
)

export default StudentProfileLayout;
