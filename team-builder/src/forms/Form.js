import React, { useState } from "react";

const Form = ({addNewMember}) => {

	const [member, setMember] = useState({
		name: "",
		role: "",
		email: ""
	});

	const changes = event => {
		setMember({ ...member, [event.target.name]: event.target.value });
	};

	const submitForm = event => {
		event.preventDefault();
		addNewMember(member);

		setMember({ name: "", role: "", email: "" });
	};

	console.log("member", member);

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="name">Name:	</label>
			<input type="text" id="name" name="name" value={member.name} onChange={changes}/><br />
			<label htmlFor="role">Role:</label>
			<input type="text" id="role" name="role" value={member.role}  onChange={changes} /><br/>
			<label htmlFor="email">E-mail Address:</label>
			<input type="text" id="email" name="email" value={member.email}  onChange={changes} /><br/>
			<button type="submit">Add Team Member</button>
		</form>
	)
};

export default Form;