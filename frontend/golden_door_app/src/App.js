import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';

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
      <Title/>
    </div>
  );
}

export default App;
