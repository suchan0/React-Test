import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";


// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";


function App() {


const [list, setList] = React.useState(["Monday", "Tuesday", "Wednesday" ,"Thursday","Friday","Saturday","Sunday"]);
const text = React.useRef(null);

const addBucketList = () => {
// 스프레드 문법! 기억하고 계신가요? :) 
// 원본 배열 list에 새로운 요소를 추가해주었습니다.
setList([...list, text.current.value]);
}

console.log(list);
return (
<div className="App">
<Container>
<Title>리액트 일주일</Title>

<Line/>
{/* 컴포넌트를 넣어줍니다. */}
{/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
<Route

path="/"
exact
render={(props) => (
<BucketList list={list}/>
)}


/>

<Route path="/" exact>
</Route>
<Route path="/Monday" component={Monday}>
</Route>
<Route path="/Tuesday" component={Tuesday}>
</Route>
<Route path="/Wednesday" component={Wednesday}>
</Route>
<Route path="/Thursday" component={Thursday}>
</Route>
<Route path="/Friday" component={Friday}>
</Route>
<Route path="/Saturday" component={Saturday}>
</Route>
<Route path="/Sunday" component={Sunday}>
</Route>
    






<Route path="/Detail" component={Detail} />

</Container>
{/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
</div>
);
}

// const Input = styled.div`
// max-width: 350px;
// min-height: 10vh;
// background-color: #fff;
// padding: 16px;
// margin: 20px auto;
// border-radius: 5px;
// border: 1px solid #ddd;
// `;

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 20px;
border: 5px solid #ddd;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;