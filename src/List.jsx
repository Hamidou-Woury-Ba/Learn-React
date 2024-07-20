import PropTypes from 'prop-types'

function List(props){

    //React veut que l'on assigne des clés au list item

    // const fruits = [
    //     { id : 1, name : "apple", colories : 95}, 
    //     { id : 2, name : "orange" , colories : 45}, 
    //     { id : 3, name : "banana" , colories : 105}, 
    //     { id : 4, name : "coconut" , colories : 159}, 
    //     { id : 5, name : "pinapple" , colories : 37}
    // ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.colories - b.colories); // NUMERIC
    // fruits.sort((a, b) => b.colories - a.colories); //REVERSE NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.colories < 100)

    // const fruitItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name} : &nbsp; {fruit.colories}</li>)

    const itemList = props.items;
    const itemCategory = props.category;

    const listItems = itemList.map(item => <li key={item.id}>{item.name} : &nbsp; {item.colories}</li>)


    return (
        <>
            <h2 className="list-category">{itemCategory}</h2>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        colories : PropTypes.number
    }))  
}

List.defaultProps = {
    category : "Default Category",
    items : []
}

export default List;