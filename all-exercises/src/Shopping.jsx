import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Shopping = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemQuantity] = useState(1);

    const addItem = event => {
        event.preventDefault();
        setItems([...items, { id: items.length, name: itemName, quantity: itemQuantity }]);
        setItemName("");
    }
    const increaseQuantity = (id) => {
        const newItems = [...items];
        newItems[id].quantity++;
        setItems(newItems);
    }
    const decreaseQuantity = (id) => {
        const newItems = [...items];
        newItems[id].quantity--;
        setItems(newItems);
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
                <form onSubmit={addItem}>
                    <input type="text" name="item" placeholder="Enter an item:" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    <button type="submit"> Add Item </button>
                </form>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.name} | Quantity: {item.quantity}
                            <button className="spread" onClick={() => increaseQuantity(item.id)}> + 1 </button>
                            <button className="spread" onClick={() => decreaseQuantity(item.id)}> - 1 </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Shopping;