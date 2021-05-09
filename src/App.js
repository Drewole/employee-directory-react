import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import List from './components/List';
import DirectoryContext from './components/DirectoryContext';

function App() {
	const [
		renderReady,
		setRenderReady
	] = useState(false);
	const [
		directoryList,
		setDirectoryList
	] = useState([]);
	const [
		searchValue,
		setSearchValue
	] = useState();
	const [
		filteredList,
		setFilteredList
	] = useState();

	// const updateInput = async (input) => {
	// 	const filtered = directoryList.filter((input) => {
	// 		return input.name.toLowerCase().includes(input.toLowerCase());
	// 	});
	// 	setSearchValue(input);
	// 	setDirectoryList(filtered);
	// };
	const updateInput = (e) => {
		setSearchValue(e.target.value);
		const search = e.target.value.toLowerCase();
		const filtered = directoryList.filter((employee) => {
			return (
				employee.name.first.toLowerCase().includes(search) || employee.name.last.toLowerCase().includes(search)
			);
		});
		console.log(filtered);
		setFilteredList(filtered);
	};

	const getData = async () => {
		try {
			// fetch data from a url endpoint
			const response = await Axios.get(
				'https://randomuser.me/api/?results=50&inc=id,picture,name,phone,email,dob&nat=us'
			);
			// const items = await response.json();

			const data = await { ...response.data.results };

			setDirectoryList(Object.values(data));
		} catch (error) {
			alert(error); // catches both errors
		}
	};

	useEffect(() => {
		// fetch data from a url endpoint
		getData();
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
				<DirectoryContext.Provider value={(directoryList, setDirectoryList)}>
					<div className="container">
						<div className="search">
							<input
								onChange={(e) => updateInput(e.target.value)}
								placeholder="Search..."
								type="text"
								name="search"
								id="search"
							/>
						</div>
						{renderReady === false ? <p>Loading...</p> : <List directory={directoryList} />}
					</div>
				</DirectoryContext.Provider>
			</main>
		</div>
	);
}

export default App;
