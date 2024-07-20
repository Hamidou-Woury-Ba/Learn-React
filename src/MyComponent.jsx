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
            <p>Name : {name} </p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age} </p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed : {employed ? "Yes" : "NO"} </p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )
}

export default MyComponent;