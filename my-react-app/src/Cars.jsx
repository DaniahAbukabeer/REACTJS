import React, {useState,useEffect} from "react";


export default function Cars() {
    const [data,setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    //we need cartype = array of the types we will filter based on
    //
    const [carType, setCarType] = useState([]);
    const [selectedMake, setSelectedMake] = useState('');


    useEffect( ()=>{
        fetch('https://freetestapi.com/api/v1/cars')
        .then((response)=>response.json())
        .then((data)=> {
            setData(data);
            setLoading(false);
            const makes = [...new Set(data.map(car => car.make))]; 
            setCarType(makes);
        })
        .catch((error)=>{
            setError(error);
            setLoading(false);
        });



    },[]);

    const handleFilter = (make) => {
        setSelectedMake(make);
      };


    // if (loading) {
    //     return <div>Loading...</div>;
    //   }
    
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   }

        return (
              <div className="maam">
            
            {carType.map((make) => (
             <button key={make} onClick={() => handleFilter(make)}>{make}</button>
      ))}
            {/* {data.map(cars=> (
                <button onClick={handleFilter}>{cars.make}</button>
            ))}
             */}
            {data.filter(car => 
        selectedMake === '' || car.make === selectedMake
      ). map(item=> (
                 <div className="card" key={item.id}>
                    <img className="card-image" src={item.image} alt="car picture"/>
                    <h2 className="card-title">{item.make} {item.model}</h2>
                    <h4 className="card-title">{item.year}</h4>
                    {/* <p className="card-text">Make: {item.make}</p> */}
                    <p className="card-text">Color: {item.color}</p>
                    <p className="card-text">Mileage: {item.mileage}</p>
                    <p className="card-text">PRICEEE: {item.price}</p>
                </div>
            ))
        
        }
    </div>
        )


}
