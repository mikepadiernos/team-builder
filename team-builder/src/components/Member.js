import React from "react";

const Member = props => {
	const { name, title } = props;
	return (
		<card>
			<h2>
				{name}
			</h2>
			<h3>
				{title}
			</h3>
		</card>
	)
};

export default Member;