import React, { useState, useEffect } from "react";

function MyUseEffectComponent(){

    // const [count, setCount] = useState(0)
    // const [color, setColor] = useState("green")

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // useEffect(() => {
    //     document.title = `Count : ${count} ${color}`
    // }, [count, color])

    // function addCount(){
    //     setCount(c => c + 1)
    // }

    // function substractCount(){
    //     setCount(c => c - 1)
    // }

    // function changeColor(){
    //     setColor(c => c === "green" ? "red" : "green")
    // }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVEN LISTENER ADDED")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("EVEN LISTENER REMOVED")
        }
    }, [])

    useEffect(() => {
        document.title = `${width} x ${height}`
    },[width, height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <div>
            {/* <p style={{color : color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button><br />
            <button onClick={changeColor}>Change color</button><hr /> */}

            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    )
}

export default MyUseEffectComponent;