import React from "react"
import { FaStar}  from "react-icons/fa"
// const colors ={
//     orange: "#FFBA5A",
//     grey : "#a9a9a9"
// }
const StarRating = () => {
    const random = Math.floor(Math.random() * 5)+1;
        return (
    <div>
        {[...Array(5)].map((star, i) =>{
            const ratingValue = i + 1;
            return <label>
                <input  name="random"
                 value ={ratingValue}
                 onChange = {() => random(ratingValue)}
                 />

                <FaStar className="star" color={ratingValue <= random ? "#FFBA5A" : "#a9a9a9"} size={33}/>
                </label>
        })}
        
        </div>
    );
}

export default StarRating