import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

function MyUseEffectComponent() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        document.title = `Count : ${count} ${color}`
    }, [count, color])

    function addCount() {
        setCount(c => c + 1)
    }

    function substractCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

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
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <div>
            <div className="grid grid-cols-2 p-10 md:px-20 lg:px-50 xl:px-56">
                <div className="flex flex-col">
                    <p className="text-[50px]" style={{ color: color }}>Count: {count}</p>
                    <div className="flex gap-2">
                        <Button onClick={addCount}>Add</Button>
                        <Button onClick={substractCount}>Substract</Button>
                        <Button onClick={changeColor}>Change color</Button>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-[30px]">Redimensionnement de l'écran</h2>
                    <div>
                        <p className="font-medium">Width : {width}</p>
                        <p className="font-medium">Height : {height}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-red-500 text-[30px] text-center w-3/4">Il faut s'avoir que le titre de la page change en fonction de la valeur et de la couleur de Count ou des dimentions de l'écran.</h2>
            </div>
        </div>
    )
}

export default MyUseEffectComponent;