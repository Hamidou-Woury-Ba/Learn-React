import style from './Card.module.css'
import picture from './../../../assets/DSC_2014.png'

function Card() {
    return (
        <div className='flex justify-center items-center max-h-screen'>
            <div className={style.card}>
                <img className={style.cardImage} src={picture} alt="profile future" />
                <h2 className={style.cardTitle}>Hamidou Woury Ba</h2>
                <p className={style.carText}>I am a web developer </p>
            </div>
        </div>
    )
}

export default Card;