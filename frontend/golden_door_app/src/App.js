import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/Uploadform';
import LoadInsta from './components/Insta';
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('https://golden-door-cloud-backend-pozhs3qo2a-uw.a.run.app/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header> */}
      <header className='App-header' style={{textAlign: 'center'}}>
        <h1>Cuts</h1>
      </header>
      <LoadInsta token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
    </div>
  );
}

export default App;
