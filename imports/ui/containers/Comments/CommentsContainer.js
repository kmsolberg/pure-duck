import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms } from '../../../api/forms.js';

import Comments from './Comments';


class CommentsContainer extends Component {
    constructor(props) {
        super(props);
    }

  componentDidMount() {

    }

    render () {
        return (
            <div className="comment-cards">
                <Comments 
                    forms={this.props.forms}
                />
            </div>
        )
    }
}

CommentsContainer.defaultProps = {
    forms: []
}

CommentsContainer.propTypes = {
    forms: PropTypes.array.isRequired
};

export default CommentsContainer =  createContainer(() => {
  return {
    forms: Forms.find({}).fetch(),
  };
}, CommentsContainer);