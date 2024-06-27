import React,{useState} from "react";

function MyArrayState(){

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""; // this is to reset the value of the input feild after we hit the add food button
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i !== index ));
    }

    return(<div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index)=><li key={index} onClick={()=> handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add food</button>
    </div>);

}

export default MyArrayState