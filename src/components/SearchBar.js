const SearchBar = (keyword, setKeyword) => {
	console.log(keyword.input);
	return (
		<div className="search">
			<input
				value={keyword.input}
				onChange={(e) => this.setKeyword(e.target.value)}
				placeholder="Search..."
				id="search"
			/>
		</div>
	);
};

export default SearchBar;
