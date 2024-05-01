import React, { useState } from 'react';
import './App.css';

const App = () => {

  let currentTime = new Date().toLocaleString();

  const [time, setTime] = useState(currentTime);

  let changeTime = () => {
    let newTime = new Date().toLocaleString();
    setTime(newTime);
  }
  setInterval(changeTime, 1000);


  return (
    <>
      <div className="container">
        <h1 className="text-center text-dark my-5">{time}</h1>
      </div>

    </>
  )
}

export default App
