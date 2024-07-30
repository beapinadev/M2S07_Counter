import React, { useState } from 'react';
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='counter-content'>
            <button className='button'onClick={increment}>+</button>
            <span className='count'>{count}</span>
            <button className='button'onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;
