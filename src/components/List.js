const List = (props) => {
	//This renders out
	console.log(props.directory);
	// const dataArray = props.directory
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
					{/* {props.directory.map((item) => {
						return (
							<tr key={item.id.value}>
								<td>
									<img src={item.picture.thumbnail} alt={item.name} />
								</td>
								<td>{item.name}</td>
								<td>{item.phone}</td>
								<td>
									<a href={`mailto:${item.email}`}>{item.email}</a>
								</td>
								<td>{item.dob}</td>
							</tr>
						);
					})} */}
				</tbody>
			</table>
		</div>
	);
};

export default List;
