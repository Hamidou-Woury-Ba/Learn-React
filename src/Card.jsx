import picture from './assets/DSC_2014.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={picture} alt="profile future" />
            <h2 className='card-title'>Hamidou Woury Ba</h2>
            <p className='card-text'>I am a web developer </p>
        </div>
    )
}

export default Card;