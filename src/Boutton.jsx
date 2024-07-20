function Boutton(){
    
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++
    //         console.log(`${name} clicked me ${count} time(s)`)
    //     }else{
    //         console.log(`${name} stop clicked me`)
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "OUCH 😮"

    //Si on ajoute un ensemble de parenthèses après un rappel, on l’appellera immédiatement
    return <button onDoubleClick={(e) => handleClick(e)}>Click me 😁</button>
}

export default Boutton;