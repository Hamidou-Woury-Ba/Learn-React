import React, {useState} from 'react'
function ImportArrayListComponent(){

    const [foods, setFood] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood(e){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""
        setFood(f => ([...f, newFood]))
    }

    function handleRemoveFood(index){
        setFood(foods.filter((_, i) => i !== index))
    }

    return(
        <div>
            <h1>List of foods</h1>
            <p>{foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}</p>
            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default ImportArrayListComponent;