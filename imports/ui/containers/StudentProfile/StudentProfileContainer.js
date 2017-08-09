import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../../../api/forms';

import { Paper, DropDownMenu, MenuItem, TextField, RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

import StudentProfile from './StudentProfile';

class StudentProfileContainer extends Component {
    render () {
        // showAllReviews = () => {
        //     // ToDos.update(item._id, { $set: { complete: !item.complete}})
        //     Meteor.call('forms.showAllReviews')
        // }

        return (
            <StudentProfile forms={this.props.forms}/>
            // <div>
            //     <Paper>
            //         <h1>What do you want to review?</h1>
            //         <Link to="/projects">
            //             <RaisedButton label="Project" primary={true} />
            //         </Link>
            //         <Link to="/lessons">            
            //             <RaisedButton label="Lesson" primary={true} />
            //         </Link>            
            //         <RaisedButton label="Topic" primary={true} />
            //     </Paper>
            //     <Paper >
            //         <h1>Past reviews...</h1>
            //         <Paper>
            //             <h1>Aloha...</h1>
            //             <h2>{this.props.forms}</h2>
            //             {console.log(this.props.forms)}    
            //             <p>...</p>
            //         </Paper>
            //     </Paper>
            // </div>
        )
    }
}

StudentProfileContainer.defaultProps = {
    forms: []
}

// export default StudentProfileContainer;
export default createContainer(() => {
  Meteor.subscribe('forms');
  return{
    forms: Forms.find({}, { sort: { createdAt: -1 } }).fetch()
  }
}, StudentProfileContainer)
