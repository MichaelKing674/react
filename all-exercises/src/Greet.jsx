import { useEffect } from 'react';

 const Greet = ({ name }) => {
 const message = `Hello, ${name}!`;

 useEffect(() => {
     console.log(`Running useEffect ${name}`);
     document.title = `Greetings to ${name}`; 
 }, [name]);

 return (
    <div className='Component'>
        <h1>Greeting</h1> 
        {message}
    </div>
 );
 };

 export default Greet;