import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import './style.css';

const ReviewCard = ({form}) => (
    <Card>
        <CardHeader 
            title={form.form}
            subtitle={form.title}
        />
        <CardText>1: {form.lesson1}/5</CardText>  
        {/* <CardText>The lesson {form.lesson2} ? did : didn't built up to the lab.</CardText> */}
        <CardText>3: {form.lesson3}</CardText>
        <CardText>4: {form.lesson4}</CardText>
        <CardText>5: {form.lesson5}</CardText>
        <CardText>Takeaway: {form.lessonTakeaway}</CardText>        
    </Card>
)

export default ReviewCard