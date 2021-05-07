import './App.css';
import List from './components/List';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Employee Directory</h1>
				<p>Use the search box, or click on a column heading to sort by that column.</p>
			</header>
			<main>
				<div className="container">
					<div className="search">
						<input type="text" name="search" id="search" />
						<button>Search</button>
					</div>
					<List />
				</div>
			</main>
		</div>
	);
}

export default App;
