import { useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        setCounter(counter+1 );
    }

    return(
        <div className="counter-parent">
            <p className="counter-txt">{counter}</p>
            <button className="counter-button" onClick={updateCounter}>+</button>
        </div>
    );
}

export default Counter