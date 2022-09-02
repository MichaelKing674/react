import React from 'react';
import { Routes , Route } from "react-router-dom";
import './index.css';
import Clock from './Clock';
import Intro from './Intro';
import LessText from './OverflowText';
import ProductTable from './ProductTable';
import Greet from './Greet';
import Car from './Car';
import Shopping from './Shopping';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Intro/>} />
        <Route path="/clock" element={<Clock/>} />
        <Route path="/lessText" element={<LessText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique ligula orci, vitae tristique lectus tempus non. Maecenas dapibus lacus a arcu euismod tincidunt. Sed pretium eu lorem eget auctor. Ut eros ex, semper sed vulputate quis, vehicula a tellus. Curabitur gravida pulvinar turpis vel placerat. Vivamus in dui ac risus mollis pharetra. Vivamus in semper magna. Aliquam et convallis nibh. Pellentesque aliquet malesuada mollis. Fusce turpis enim, condimentum vitae tincidunt quis, elementum dictum dui."
        maxLength={50}/>} />
        <Route path="/productTable" element={<ProductTable/>} />
        <Route path="/greet" element={<Greet name={"Michael"}/>} />
        <Route path="/car" element={<Car/>} />
        <Route path="/shopping" element={<Shopping/>} />
      </Routes>
    </div>
  );
}

export default App;
