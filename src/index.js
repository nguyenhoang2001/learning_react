import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function MyInfo() {
  return (
    <div className='contain'>
      <h1>HOÀNG</h1>
      <p>I like to watch himymt
        Im 20
        I study computer engineering in University of Technology
      </p>
      <ul>
        <li>God father</li>
        <li>Old man 100 years old climb out the window</li>
        <li>The Hobiit</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo/>
,document.getElementById('root'));



