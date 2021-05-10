import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
// eslint-disable-next-line
import List from './components/List';
import SearchBar from './components/SearchBar';
import DirectoryContext from './components/DirectoryContext';

function App() {
	// setting our state

	const [
		// eslint-disable-next-line
		renderReady,
		setRenderReady
	] = useState(false);
	const [
		input,
		setInput
	] = useState('');
	// const [
	// 	directoryList,
	// 	setDirectoryList
	// ] = useState([]);
	const [
		filteredList,
		setFilteredList
	] = useState([]);
	// Function used for instant search functionality. We call this onChange on the input itself.
	const updateInput = async (input) => {
		//Searching through the directory for matches to the first name or last name, take them out and put them in a var filtered
		const filtered = filteredList.filter((employee) => {
			return (
				employee.name.first.toLowerCase().includes(input) || employee.name.last.toLowerCase().includes(input)
			);
		});

		setInput(input);
		setFilteredList(filtered);
	};

	// Setting up API call
	const getData = async () => {
		try {
			// fetch data from a url endpoint
			const response = await Axios.get(
				'https://randomuser.me/api/?results=50&inc=id,picture,name,phone,email,dob&nat=us'
			);
			// const items = await response.json();

			const data = await { ...response.data.results };

			// setDirectoryList(Object.values(data));
			setFilteredList(Object.values(data));
			console.log(Object.values(data));
		} catch (error) {
			alert(error); // catches both errors
		}
	};
	// Here we are retrieving data when the app is first loaded
	useEffect(() => {
		// fetch data from a url endpoint
		getData();
		// setFilteredList(directoryList);
		setRenderReady(true);
	}, []);

	// updateInput(searchValue);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Employee Directory</h1>
				<p>Use the search box, or click on a column heading to sort by that column.</p>
			</header>
			<main>
				<DirectoryContext.Provider value={(filteredList, setFilteredList)}>
					<div className="container">
						<SearchBar input={input} onChange={updateInput} />
						{renderReady === false ? <p>Loading...</p> : <List directory={filteredList} />}
					</div>
				</DirectoryContext.Provider>
			</main>
		</div>
	);
}

export default App;
