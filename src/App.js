import React, {useState, useEffect} from 'react'
import './App.css';
import Card from './components/Card';

function App() { 
  const [result, setResult]  = useState([])

  useEffect(() => {
  fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      setResult(data.results)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-list">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">GitHub</a></li>
        </ul>
      </header>
      <div className="Hero-wrapper">
        {
          result.map((chars, id) => {
            return <Card key={id} chars={chars} />
          }) 
        }
      </div>
    </div>
  );
}

export default App;
