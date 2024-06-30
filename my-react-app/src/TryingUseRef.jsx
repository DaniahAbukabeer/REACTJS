import React, {useState,useEffect,useRef} from 'react'

export default function TryingUseRef() {

    // let [number, setNumber] = useState(0);
    const ref = useRef()

    useEffect(()=>{
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        setNumber(n => n +1);
    }
  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>
    </div>
  )
}
