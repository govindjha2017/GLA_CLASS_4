import "./card.css"
// const Card = (props)=>{
//     return(
//         <div className="card">
//             <h2>Name: {props.name} </h2>
//             <h2>Age: {props.age}</h2>
//             <h2>City: {props.city}</h2>
//         </div>
//     )
// }


const Card = ({name,age,city})=>{
    return(
        <div className="card">
            <h2>Name: {name} </h2>
            <h2>Age: {age}</h2>
            <h2>City: {city}</h2>
        </div>
    )
}

export default Card;


