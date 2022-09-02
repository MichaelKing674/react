import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Car = () => {
    const [brand, setBrand] = useState("BMW");
    const [model, setModel] = useState("M4");
    const [colour, setColour] = useState("Blue");
    const [year, setYear] = useState(2020);

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
                <h1>My car is a beaut. </h1>
                <h4>These are her features:</h4>
                <p>{brand},{model}</p>
                <p>{colour}</p>
                <p>{year}</p>

                <form>
                    <label> Brand:</label>
                    <input name="brand"
                        type="text"
                        value={brand}
                        onChange={e => setBrand(e.target.value)} />

                    <label> Model:</label>
                    <input name="model"
                        type="text"
                        value={model}
                        onChange={e => setModel(e.target.value)} />

                    <label> Colour:</label>
                    <input name="colour"
                        type="text"
                        value={colour}
                        onChange={e => setColour(e.target.value)} />

                    <label> Year:</label>
                    <input name="year"
                        type="text"
                        value={year}
                        onChange={e => setYear(e.target.value)} />
                    <br />
                </form>
            </div>
        </>
    );
}

export default Car;