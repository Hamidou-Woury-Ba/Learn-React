import PropTypes from 'prop-types';

function Student(props){
    return (
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

//pour vérifier le type des variables passées
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}

Student.defaultProps = {
    name : "Unknown",
    age : 0,
    isStudent : false,
 
}


//Mettre ce code dans App.jsx
{/* <Student name = "Hamidou" age="23" isStudent = {true}/>
<Student name = "Tahirou" age={22} isStudent = {false}/>
<Student name = "Moussa" age={26} isStudent = {false}/>
<Student name = "Daniel" age={21} isStudent = {true}/>
<Student name="Cheikh" /> */}

export default Student;