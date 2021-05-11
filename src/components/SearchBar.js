// eslint-disable-next-line
import react, {useState} from "react"

const SearchBar = (props) => {
	const [
		searchVal,
		setSearchVal
	] = useState('');
	console.log(props.search.filteredList)
	const updateInput =  (e) => {
	//Searching through the directory for matches to the first name or last name, take them out and put them in a var filtered
		const value = e.target.value;
		console.log(value)
		setSearchVal(value);
		
		console.log(props.search.filteredList)
		const employees = props.search.filteredList
		const filteredData = employees.filter((employee) => {
			console.log(employee)
			return (
				employee.name.first.toLowerCase().includes(value) || employee.name.last.toLowerCase().includes(value)
			);
		});

		props.search.setFilteredList(filteredData);
	};

	return (
		<div className="search">
			<input
				value={searchVal}
				onChange={updateInput}
				placeholder="Search..."
				id="search"
				name="search"
			/>
		</div>
	);
};

export default SearchBar;
