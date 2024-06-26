import React, {useState} from 'react'; 

function MyComponent(){
    const [name, setName] = useState("Guest");
    //we are creating a stateful variable and a setter fucntion to update that variable
    const [age, setAge] = useState(0);
    const [isEmployeed, setIsEmployeed] = useState(false);

    const updateAge = () => {
        setAge(age + 1);
    }

    const updateName = () => {
        setName("Danybannanay");

    };

    const updateEmployeed = ()=> {
        isEmployeed ? setIsEmployeed(false) : setIsEmployeed(true);
    };

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>+ Age</button>
            <p>Employed: {isEmployeed ? <span>Yes</span> : <span>No</span>}</p>
            <button onClick={updateEmployeed}>toggle job :&gt;</button>
        </div>
    );

}

export default MyComponent