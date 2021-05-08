import {useState, useEffect} from 'react'
import Axios from 'axios'
import './App.css'
import List from './components/List'
import DirectoryContext from './components/DirectoryContext'

function App() {
  const [ renderReady, setRenderReady ] = useState(false)
	const [ directoryList, setDirectoryList ] = useState([]);

	useEffect( () => {
    // fetch data from a url endpoint
    const getData = async () => {

      try {
        // fetch data from a url endpoint
        const response = await Axios.get("https://randomuser.me/api/?results=50&inc=id,picture,name,phone,email,dob")
        // const items = await response.json();
        
        const data = await {...response.data.results}
        console.log(typeof data)
        console.log(data)
        const dataArray = Object.values(data)
        console.log(typeof dataArray)
        console.log(...dataArray)
        setDirectoryList(dataArray)

      } catch (error) {
        alert(error); // catches both errors
      }

    } 
    getData()
    setRenderReady(true)
  }, [])

	return (
    
		<div className="App">
			<header className="App-header">
				<h1>Employee Directory</h1>
				<p>Use the search box, or click on a column heading to sort by that column.</p>
			</header>
			<main>
        <DirectoryContext.Provider value={directoryList,setDirectoryList}>
          <div className="container">
            <div className="search">
              <input placeholder="Search..." type="text" name="search" id="search" />
            </div>
            { renderReady === false ? (
              <p>Loading...</p>
            ) : (
              <List directory={directoryList} />
            )}
            
          </div>
        </DirectoryContext.Provider>
			</main>
		</div>
	);
}

export default App;
