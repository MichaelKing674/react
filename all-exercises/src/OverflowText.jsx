import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';



const LessText = ({ text, maxLength }) => {
    const [hidden, setHidden] = useState(true);

    if (text.length <= maxLength) {
        return <span>{text}</span>
    }

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
                <span>
                    {hidden ? `${text.substr(0, maxLength).trim()}...` : text}

                    {hidden ? (
                        <a onClick={() => setHidden(false)}>Read More</a>
                    ) : (
                        <a onClick={() => setHidden(true)}>Read Less</a>
                    )}
                </span>
            </div>
        </>
    );
}

export default LessText;