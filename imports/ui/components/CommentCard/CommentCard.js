import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import './style.css';

const CommentCard = () => (
    <Card>
        <CardHeader
            title="Project"
            subtitle="1 - Boomtown"
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardText expandable={true}>
        The concept is interesting and the finished site looks pretty cool, but the filtering was really hard to figure out and I don't feel like I fully understand how we did it!
        </CardText>
        <IconButton iconClassName="muidocs-icon-custom-github" />
    </Card>
)

export default CommentCard;
