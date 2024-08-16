import { Button } from '@/components/ui/button'
import react, {useState} from 'react'
function MyComponent(){

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [employed, setEmployed] = useState(false)

    const updateName = () => {
        setName("Hamidou")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setEmployed(!employed)
    }

    return (
        <div>
            <p className='pb-2'>Name : {name} </p>
            <Button onClick={updateName}>Set Name</Button>

            <p className='pb-2 pt-2'>Age : {age} </p>
            <Button onClick={incrementAge}>Increment Age</Button>

            <p className='pb-2 pt-2'>Is employed : {employed ? "Yes" : "NO"} </p>
            <Button onClick={toggleEmployedStatus}>Toggle Status</Button>
        </div>
    )
}

export default MyComponent;