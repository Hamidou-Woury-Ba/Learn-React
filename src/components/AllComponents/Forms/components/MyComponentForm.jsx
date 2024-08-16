import React, {useState} from 'react';

function MyComponentForm(){

    const [name, setName] = useState('Guess');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value);
    }

    return (
        <div>
            <input className='border border-gray-950 mb-2 w-[250px] h-[30px]' type="text" value={name} onChange={handleNameChange}/>
            <p className='font-medium text-xl mb-2'>Name : {name}</p>

            <input className='border border-gray-950 mb-2 w-[250px] h-[30px]' type="number" value={quantity} onChange={handleQuantityChange}/>
            <p className='font-medium text-xl mb-2'>Quantity : {quantity}</p>

            <textarea className='border border-gray-950 mb-2 w-[250px] h-[30px]' value={comment} onChange={handleCommentChange} placeholder='Enter delivery instruction'></textarea>
            <p className='mb-2'>Comment : {comment}</p>

            <select value={payment} onChange={handlePaymentChange} className='mb-2'>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Master Card</option>
                <option value="Giftcard">Gift Card</option>
            </select>
            <p className='font-medium text-xl mb-2'>Payment  : {payment}</p>

            <label htmlFor="">
                <input className='border border-gray-950 mb-2 w-[250px] h-[15px]' type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pickup
            </label><br />
            <label htmlFor="">
                <input className='border border-gray-950 mb-2 w-[250px] h-[15px]' type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p className='font-medium text-xl mb-2'>Shipping : {shipping}</p>
        </div>
    )
}

export default MyComponentForm;