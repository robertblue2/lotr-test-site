import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import HumanCharacters from './components/HumanCharacters'
import './App.css';

function App() {

  const [jsonData, setJsonData] = useState(null)
  const url = `https://the-one-api.dev/v2/character`

  const myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer 6561PMJzihWK-M0I_H8-');

  useEffect(() => {
    fetch(url, {
        method: 'GET',
        headers: myHeaders,
    })
      .then(response => response.json())
      .then(data => setJsonData(data.docs))
  }, [])

  console.log('LOTR MOVIES', jsonData)

  



  return (
    <div className="App-header App">
      
        <Header />
        <HumanCharacters />
       
     
    </div>
  );
}

export default App;
