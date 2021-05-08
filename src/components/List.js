
import Listitem from './Listitem';

const List = (props) => {
    console.log(props)
	return (
		<div className="employee-list">
			<h3>Results</h3>

			{props.directoryList.map((item) => (
				<Listitem image={item.picture} name={item.name} phone={item.phone} email={item.email} dob={item.dob} />
			))}
		</div>
	);
};

export default List;
