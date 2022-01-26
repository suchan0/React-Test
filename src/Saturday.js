// 리액트 패키지를 불러옵니다.
import React from "react";
import "./App.css"
import  { FaStar } from "react-icons/fa";
import {Route, Switch} from "react-router-dom";
import App from"./App";
import {useHistory} from "react-router-dom";



const colors ={
    orange: "#FFBA5A",
    grey : "#a9a9a9"
}
const Tuesday = (props) => {
    const history = useHistory();
   const stars =Array(5).fill(0);
   const [currentValue, setCurrentValue] = React.useState(0);
   const [hoverValue, setHoverValue] = React.useState(undefined);


    const handleClick = value =>{
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () =>{
        setHoverValue(undefined)
    }

return (
    <div style = {styles.container}>
        <h1>토요일</h1>
        <h2>별점 주세요!</h2>
        <div style ={styles.stars}>
            {stars.map((_, index) => {
                return (
                    <FaStar
                    key = {index}
                    
                    size={50}
                    style={{
                        marginRight: 10,
                        cursor: "pointer"
                    }}
                    color = {(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    onClick = {() => handleClick(index + 1)}
                    />
                )
            })}
        </div>
        <textarea
            placeholder = "평점 남기기"
            style = {styles.textarea}
            
        />
         <button style={styles.button} onClick={()=>{
            history.push("/")
        }}>감사합니다</button>
        <Switch>
        <Route path="/" exact>
        </Route>
        <Route path ="/App">
            <App />
        </Route>
        </Switch>
        </div>
        
);
};

const styles = {
     container: {
         display: "flex",
         flexDirection: "column",
         alignItems: "center"
     },
     textarea: {
        border : "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        margin: "20px 0",
        minHeight : 100,
        padding : 10
     },

     button: {
        border : "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding : 10
     }

}

export default Tuesday;

