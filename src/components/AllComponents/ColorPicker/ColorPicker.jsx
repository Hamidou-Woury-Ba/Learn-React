import React, {useState} from "react";
import style from "./ColorPicker.module.css"

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (event) =>{
        setColor(event.target.value)
    }

    return (
        <div className={style.colorPickerContainer}>
            <h1>Color Picker</h1>
            <div className={style.colorDisplay} style={{backgroundColor : color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label htmlFor="">Select a color : </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker;