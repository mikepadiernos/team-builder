import React from "react";
import Member from "./Member";

const Team = props => {

	return (
		<section>
			{props.team.map(member => (
					<Member key={member.id} name={member.name} role={member.role} email={member.email} />
				)
			)}
		</section>
	);
};

export default Team;