import React, { Component } from 'react';

import ProjectForm from './ProjectForm';

class ProjectFormContainer extends Component {
    render () {
        return (
            <ProjectForm projectFormData={this}/>
        )
    }
}

export default ProjectFormContainer;
