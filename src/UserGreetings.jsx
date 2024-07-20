
function UserGreetings(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.name}</h2>
    }
    return <h2>Please login to see your greetings</h2>
}

export default UserGreetings;