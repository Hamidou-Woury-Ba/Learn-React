import React, {useState} from 'react'
import { Button } from '../ui/button'
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
        <div className='flex flex-col items-center mt-10'>
            <h1 className='font-bold text-[50px]'>List of Fruits</h1>
            <h3 className='text-red-500'>Click on a fruit item to delete it</h3>
            <p>{foods.map((food, index) => <li key={index} className='font-medium text-md cursor-pointer' onClick={() => handleRemoveFood(index)}>{food}</li>)}</p>
            <input className='border border-gray-950 mt-5' type="text" id="foodInput" placeholder='Enter food name' />
            <Button onClick={handleAddFood} className="mt-5">Add Food</Button>
        </div>
    )
}

export default ImportArrayListComponent;