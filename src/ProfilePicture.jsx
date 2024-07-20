function ProfilePicture(){

    const imageUrl  = './src/assets/DSC_2014.png'

    const handleClick = (e) => e.target.style.display = "none"

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile picture" height={200}></img>  //on utilise la variable imageUrl dans le src de l'image
    )
}

export default ProfilePicture;