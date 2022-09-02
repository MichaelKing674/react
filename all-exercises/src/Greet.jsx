import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Greet = ({ name }) => {
    const message = `Hello, ${name}!`;

    useEffect(() => {
        console.log(`Running useEffect ${name}`);
        document.title = `Greetings to ${name}`;
    }, [name]);

    return (
        <>
            <div className='Component'>
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
            <div className='Component'>
                <h1>Greeting</h1>
                {message}
            </div>
        </>
    );
};

export default Greet;