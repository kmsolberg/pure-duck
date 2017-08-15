import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import './style.css';

const ReviewCard = ({form}) => (
    <Card className="review-card">
        <CardHeader 
            title={form.form}
            subtitle={form.title}
        />
        <CardText>1: I feel I did {form.oneToFiveRadio}/5</CardText>  
        <CardText>2. The lesson {form.trueOrFalse === true ? 'did' : 'did not' } help build up my general knowledge.</CardText> 
        <CardText>3: {form.input1}</CardText>
        <CardText>4: {form.input2}</CardText>
        <CardText>5: {form.input3}</CardText>
        <CardText>6: {form.input4}</CardText>
        <CardText>Takeaway: {form.input5}</CardText>        
    </Card>
)

export default ReviewCard