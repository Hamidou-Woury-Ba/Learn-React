
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
function MyCarObjectComponent() {


    const [car, setCar] = useState([])

    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState()
    const [carModel, setCarModel] = useState("")

    function handleAddCar() {

        const newCar = { year: carYear, make: carMake, model: carModel }
        setCar((c) => ([...c, newCar]))

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index) {

        setCar((c) => c.filter((_, i) => i !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value)
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }

    return (
        <div>
            <h2 className='font-bold text-xl mb-2'>List of cars</h2>
            <ul>
                {car.map((c, index) => (
                    <li className='font-medium text-sm mb-5' key={index} onClick={() => handleRemoveCar(index)}>Year: {c.year}, Make: {c.make}, Model: {c.model} </li>
                ))}
            </ul>
            <div className='flex flex-col'>
                <input className='border border-gray-950 mb-2 w-[250px] h-[30px]' type="number" value={carYear} onChange={handleYearChange} />
                <input className='border border-gray-950 mb-2 w-[250px] h-[30px]' type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car Make' />
                <input className='border border-gray-950 mb-2 w-[250px] h-[30px]' type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car Model' />
            </div>
            <Button onClick={handleAddCar}>Add Car</Button>
        </div>
    )
}

export default MyCarObjectComponent;