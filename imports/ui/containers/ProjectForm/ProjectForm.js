import React from 'react';
import ProjectFormLayout from '../../components/ProjectFormLayout/'


const ProjectForm = ({ handleChange, handleSubmit, state }) => (
    <div>
		<ProjectFormLayout handleChange={handleChange} handleSubmit={handleSubmit} state={state} />
	</div>
);

export default ProjectForm;
