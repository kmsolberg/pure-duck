import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import './style.css';

const CommentCard = ({form}) => (
    <Card>
        <CardHeader
            title={form.title}
            subtitle="1 - Boomtown"
        />
        <CardText>
        The concept is interesting and the finished site looks pretty cool, but the filtering was really hard to figure out and I don't feel like I fully understand how we did it!
        </CardText>
        // TODO add thumbs up button
    </Card>
)

export default CommentCard;
