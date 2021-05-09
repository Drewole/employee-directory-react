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

	const updateSearch = (searchVal) => {
		const newArray = { ...directoryList };

		function filterItems(arr, query) {
			let filtered = arr.filter(function(el) {
				return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
			});
			setDirectoryList(filtered);
		}

		const filteredArray = filterItems(newArray, searchVal);
		setDirectoryList(filteredArray);
	};

	useEffect(() => {
		// fetch data from a url endpoint
		const getData = async () => {
			try {
				// fetch data from a url endpoint
				const response = await Axios.get(
					'https://randomuser.me/api/?results=50&inc=id,picture,name,phone,email,dob&nat=us'
				);
				// const items = await response.json();

				const data = await { ...response.data.results };

				const dataArray = Object.values(data);
				setDirectoryList(dataArray);
			} catch (error) {
				alert(error); // catches both errors
			}
		};
		getData();
		setRenderReady(true);
	}, []);

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
								onChange={(event) => setSearchValue(event.target.value)}
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
