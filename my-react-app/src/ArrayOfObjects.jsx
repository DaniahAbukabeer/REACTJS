import React, {useState} from "react";

function ArrayOfObjects(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    //this would just get the current year and set that as an initial value
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handelAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c,newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");


    }

    function handelRemoveCar(index){
        setCars(c => c.filter((_,i)=> i !== index) );
    }

    function handelChangeYear(event){
        setCarYear(event.target.value);
    }

    function handelCahngeMake(event){
        setCarMake(event.target.value);

    }

    function handelChangeModel(event){
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List of Car Ojbects</h2>
            <ul>
                {cars.map((car,index)=> <li key={index} onClick={()=>handelRemoveCar(index)} >{car.year} {car.make} {car.model}</li>)}
                </ul>
            <input type="number" max={new Date().getFullYear() + 1} value={carYear} onChange={handelChangeYear} placeholder="Enter car year"/>
            <br/>
            <input type="text" value={carMake} onChange={handelCahngeMake} placeholder="Enter car make"/>
            <br/>
            <input type="text" value={carModel} onChange={handelChangeModel} placeholder="Enter car model"/>
            <br/>
            <button onClick={handelAddCar}>Add Car</button>
        </div>
    );
}

export default ArrayOfObjects