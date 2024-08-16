import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="text-center">
            <p className="text-8xl mt-0 mb-12">{count}</p>
            <button 
                className="w-36 h-12 text-xl font-bold mx-1.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={decrement}
            >
                Decrement
            </button>
            <button 
                className="w-36 h-12 text-xl font-bold mx-1.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={reset}
            >
                Reset
            </button>
            <button 
                className="w-36 h-12 text-xl font-bold mx-1.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={increment}
            >
                Increment
            </button>
        </div>
    );
}

export default Counter;
