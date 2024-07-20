
import style from './Button.module.css' //on importe le component correspondant a notre button
function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border : "none",
        cursor: "pointer"
    }

    return (
        <button style={styles}>Click me</button> //on met le nom de l'import suivit du nom de la class
    )
}

export default Button;