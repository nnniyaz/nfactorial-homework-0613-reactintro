import './App.css';
import React from 'react';

import firstPic from './img/first.jpeg'
import secondPic from './img/second.jpg'
import thirdPic from './img/third.jpeg'
import fourthPic from './img/fourth.jpeg'
import fifthPic from './img/fifth.jpeg'
import logo from './img/logo.png'

import { format } from 'date-fns'

function App() {
  const currentTime = new Date();
  const formattedTime = format(currentTime, "dd.MM.yyyy HH:mm");
  console.log(formattedTime)

  return (
    <div className="App">
      <div className='header'>
        <div className='logo-search-bar'>
          <img className='logo' src={logo} />
          <div className='search'></div>
        </div>
        <div className='time-bar'>{formattedTime}</div>
      </div>

      <div className='main'>
        <div className='block' style={{ backgroundImage: `url(${firstPic})` }}>Hey</div >
        <div className='block' style={{ backgroundImage: `url(${secondPic})` }}>Let's</div >
        <div className='block' style={{ backgroundImage: `url(${thirdPic})` }}>Give</div >
        <div className='block' style={{ backgroundImage: `url(${fourthPic})` }}>All</div >
        <div className='block' style={{ backgroundImage: `url(${fifthPic})` }}>You can</div >
      </div>
    </div>
  );
}

export default App;
