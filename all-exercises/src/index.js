import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';
import Intro from './Intro';
import LessText from './OverflowText';
import ProductTable from './ProductTable';
import Greet from './Greet';
import Car from './Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <Clock />
    <Car />
    <LessText 
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique ligula orci, vitae tristique lectus tempus non. Maecenas dapibus lacus a arcu euismod tincidunt. Sed pretium eu lorem eget auctor. Ut eros ex, semper sed vulputate quis, vehicula a tellus. Curabitur gravida pulvinar turpis vel placerat. Vivamus in dui ac risus mollis pharetra. Vivamus in semper magna. Aliquam et convallis nibh. Pellentesque aliquet malesuada mollis. Fusce turpis enim, condimentum vitae tincidunt quis, elementum dictum dui."
    maxLength={50}/>
    <ProductTable />
    <Greet name="Michael"/>
  </React.StrictMode>
);

reportWebVitals();
