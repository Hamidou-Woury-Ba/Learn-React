
import React, {useState} from 'react'
function MyCarObjectComponent(){

    
    const [car, setCar] = useState([])
    
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState()
    const [carModel, setCarModel] = useState("")

    function handleAddCar(){

        const newCar = {year : carYear, make : carMake, model : carModel}
        setCar((c) => ([...c, newCar]))

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){

        setCar((c) => c.filter((_, i) => i!== index))
    }

    function handleYearChange(e){
        setCarYear(e.target.value)
    }

    function handleMakeChange(e){
        setCarMake(e.target.value)
    }

    function handleModelChange(e){
        setCarModel(e.target.value)
    }

    return (
        <div>
            <h2>List of cars</h2>
            <ul>
                {car.map((c, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>Year: {c.year}, Make: {c.make}, Model: {c.model} </li>
                ))}
            </ul>
            <ul></ul>
            <input type="number" value={carYear} onChange={handleYearChange}/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car Make'/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car Model'/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}

export default MyCarObjectComponent;