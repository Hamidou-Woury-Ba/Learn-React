import react, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='count-bouton' onClick={decrement}>Decrement</button>
            <button className='count-bouton' onClick={reset}>Reset</button>
            <button className='count-bouton' onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;