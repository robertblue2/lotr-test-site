import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header'
import HumanCharacters from './components/HumanCharacters/HumanCharacters'
import {AUTHTOKEN} from './constants.js'
import './App.css';

function App() {

  const [jsonData, setJsonData] = useState(null)

  const url = `https://the-one-api.dev/v2/character`

  const myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', AUTHTOKEN);

  useEffect(() => {
    fetch(url, {
        method: 'GET',
        headers: myHeaders,
    })
      .then(response => response.json())
      .then(data => setJsonData(data.docs))
  }, [])


  return (
    <div className="App-header App">
      
        <Header />
        <HumanCharacters jsonData={jsonData} />
       
     
    </div>
  );
}

export default App;
