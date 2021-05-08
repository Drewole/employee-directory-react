import React from 'react';

const Listitem = (props) => {
	return (
		<tr key={props.id}>>
			<td>
				<img src={props.picture} alt={props.name} />
			</td>
			<td>{props.name}</td>
			<td>{props.phone}</td>
			<td>
				<a href={`mailto:${props.email}`}>{props.email}</a>
			</td>
			<td>{props.dob}</td>
		</tr>
	);
};

export default Listitem;
