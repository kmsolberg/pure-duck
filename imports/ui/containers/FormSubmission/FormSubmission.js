import React from 'react';
import { Paper, DropDownMenu, MenuItem, TextField } from 'material-ui';

const FormSubmission = () => (
    <div>
		<Paper >
			<h1>Project 1</h1>
			<DropDownMenu value={1}>
				<MenuItem value={1} primaryText="Never" />
				<MenuItem value={2} primaryText="Every Night" />
				<MenuItem value={3} primaryText="Weeknights" />
				<MenuItem value={4} primaryText="Weekends" />
				<MenuItem value={5} primaryText="Weekly" />
			</DropDownMenu>
			<div>
				<h1>How are you feeling about the project?</h1>
				<p>1  2  3  4  5</p>
			</div>
			<div>
				<h1>Do you enjoy it?</h1>
				<p>True / False</p>
			</div>
			<div>
				<h1>Hurdles</h1>
				<TextField
      				hintText="Type Here"
					floatingLabelText="Hurdles"
				/>
			</div>
		</Paper>
	</div>
);

export default FormSubmission;
