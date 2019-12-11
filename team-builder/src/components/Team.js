import React from "react";
import Member from "./Member";

const Team = props => {

	return (
		<section>
			{props.team.map(member => (
					<Member key={member.id}/>
				)
			)}
		</section>
	);
};

export default Team;