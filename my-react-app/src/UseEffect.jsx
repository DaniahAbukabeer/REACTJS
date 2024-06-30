import React, {useState, useEffect} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(()=>{
        document.title = `count: ${count} ${color}`
    }, [count]);

    function addCount(){
        setCount(c=> c+1);
    }

    function subCount(){
        setCount(c=> c-1);
    }

    function changeColor(){

        setColor(c=>c === "green" ? "red" : "green");
    }
    return (<>
    
         <p style={{color: color}}>
            Count: {count}
         </p>
         <button onClick={addCount}>Add</button>
         <button onClick={subCount}>Subtract</button>
         <br/>
         <button onClick={changeColor}>Change color</button>
    </>
    );
}

export default UseEffect;