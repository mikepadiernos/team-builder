import React from "react";
import Member from "./Member";

const Team = props => {

	return (
		<section>
			{props.team.map(member => (
					<Member key={member.id} name={member.name} title={member.title} />
				)
			)}
		</section>
	);
};

export default Team;