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
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name : {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity : {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instruction'></textarea>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Master Card</option>
                <option value="Giftcard">Gift Card</option>
            </select>
            <p>Payment  : {payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pickup
            </label><br />
            <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    )
}

export default MyComponentForm;