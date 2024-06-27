import React, {useState} from "react";

function NewComponent(){


    const [car, setCar] = useState({year: 2020, make: "VW", model: "Golf",});

    function handleYearChange(event){
        setCar(c => ({...c,year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar( c=> ({...c, make: event.target.value}));

    }
    function handleModelChange(event){
        setCar(c=> ({...c,model: event.target.value}));
    }
    
    return(
        <div>
                <p>Your favorite car is a {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange} />
                <br/>
                <input type="text" value={car.make} onChange={handleMakeChange} />
                <br/>
                <input type="text" value={car.model} onChange={handleModelChange}/>

        </div>
    );

}

export default NewComponent