import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
    return (
      <>
      <div className="Component">
      <nav>
          <Link to="/intro">Intro</Link>
          <Link to="/clock">Clock</Link>
          <Link to="/lessText">Less Text</Link>
          <Link to="/productTable">Product Table</Link>
          <Link to="/greet">Greet</Link>
          <Link to="/car">Car</Link>
          <Link to="/shopping">Shopping</Link>
        </nav>
      </div>
      <div className="Component" id="info">
        <h1>Michael King</h1>
        <ul>
          <li>42</li>
          <li>Wallaby Way</li>
          <li>Sydney</li>
        </ul>
      </div>
      </>
    );
  }
  
  export default Intro;
  