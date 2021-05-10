const List = (props) => {
	//This renders out

	const formatTime = (date) => {
		let newDate = new Date(date);

		const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
		const formattedDate = newDate.toLocaleDateString('en-US', options);
		return formattedDate;
	};

	return (
		<div className="employee-list">
			<h3>Results</h3>

			<table className="table">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>D.O.B.</th>
					</tr>
				</thead>
				<tbody>
					{props.directory.map((item) => {
						return (
							<tr key={item.id.value}>
								<td>
									<img src={item.picture.medium} alt={`${item.name.first} ${item.name.last}`} />
								</td>
								<td>{`${item.name.first} ${item.name.last}`}</td>
								<td>{item.phone}</td>
								<td>
									<a href={`mailto:${item.email}`}>{item.email}</a>
								</td>
								<td>{formatTime(item.dob.date)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default List;
