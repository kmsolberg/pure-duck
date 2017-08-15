import React from 'react';
import TopicFormLayout from '../../components/TopicFormLayout/'


const TopicForm = ({ handleSubmit, user }) => (
    <div>
		<TopicFormLayout 
			handleSubmit={handleSubmit} 
			user={user}
		/>
	</div>
);

export default TopicForm;
