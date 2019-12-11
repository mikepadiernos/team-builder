import React from "react";

const Member = props => {
	const { name, role, email } = props;
	return (
		<article className="card">
			<h2>{name}</h2>
			<h3>{role}</h3>
			<p>{email}</p>
		</article>
	)
};

export default Member;