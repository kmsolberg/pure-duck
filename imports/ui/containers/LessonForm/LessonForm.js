import React from 'react';
import LessonFormLayout from '../../components/LessonFormLayout/'


const LessonForm = ({ handleChange, handleSubmit, state }) => (
    <div>
		<LessonFormLayout handleChange={handleChange} handleSubmit={handleSubmit} state={state} />
	</div>
);

export default LessonForm;
