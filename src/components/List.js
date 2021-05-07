import React from 'react';
import Listitem from './Listitem';

const List = (props) => {
	const userData = 'data';
	return (
		<div className="employee-list">
			<h3>Results</h3>

			{/* {userData.map((user) => (
				<Listitem image={user.image} name={user.name} phone={user.phone} email={user.email} dob={user.dob} />
			))} */}
		</div>
	);
};

export default List;
