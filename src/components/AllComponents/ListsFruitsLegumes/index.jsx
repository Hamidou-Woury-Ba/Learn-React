import React from 'react'
import ListFruitsLegumes from './component/ListFruitsLegumes'

function index() {

    const fruits = [
        { id : 1, name : "apple", colories : 95}, 
        { id : 2, name : "orange" , colories : 45}, 
        { id : 3, name : "banana" , colories : 105}, 
        { id : 4, name : "coconut" , colories : 159}, 
        { id : 5, name : "pinapple" , colories : 37}
      ]

      const vegetables = [
        { id : 6, name : "potatoes", colories : 110}, 
        { id : 7, name : "celery" , colories : 15}, 
        { id : 8, name : "carrots" , colories : 25}, 
        { id : 9, name : "corn" , colories : 63}, 
        { id : 10, name : "broccoli" , colories : 50}
      ]

    return (
        <div className='mx-10 flex flex-col items-center mt-10'>
            {fruits.length > 0 && <ListFruitsLegumes items={fruits} category = "Fruits"/>} 
            {vegetables.length > 0 && <ListFruitsLegumes items={vegetables} category = "Vegetables"/>}
        </div>
    )
}

export default index
