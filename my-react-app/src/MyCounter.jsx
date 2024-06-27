import React, {useState} from "react";

function MyCounter(){
    const [count, setCount] = useState(0);


    function increment(){
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        
    }
    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);

    }
    function reset(){
        setCount(c => c = 0);
    }

    return (
        <div className="counter-papa">
            <p>Count: {count}</p>
            <div className="buttons-papa">

            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            </div>
        </div>
    );

}

export default MyCounter