import React, {useState, useEffect} from "react";

function WidthHighet(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event LISTENER ADDED");

        return() => {
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    },[]);

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`;
    },[width,height]);

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }





    return(
        <div>
            <p>WINDOW width: {width}px</p>
            <p>WINDOW Hieht: {height}px</p>

        </div>
    );
}


export default WidthHighet;