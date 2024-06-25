import PropTpyes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.protoTypes = {
    name: PropTpyes.string,
    age: PropTpyes.number,
    isStudent: PropTpyes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student