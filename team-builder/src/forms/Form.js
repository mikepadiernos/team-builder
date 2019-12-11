import React, { useState } from "react";

const Form = ({addNewMember}) => {

	const [member, setMember] = useState([{
		name: "",
		title: ""
	}])

	return (
		<form>
			<label htmlFor="name">Name:	</label>
			<input type="text" id="name" name="name" value={member.name} /><br />
			<label htmlFor="title">Title:</label>
			<input type="text" id="title" name="title" value={member.title} /><br/>
			<button type="submit">Add Team Member</button>
		</form>
	)
};

export default Form;