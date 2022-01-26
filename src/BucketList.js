// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating"
import {IoMdPerson} from "react-icons/io"
import { useHistory } from "react-router-dom";
import App from "./App";

const BucketList = (props) => {
let history = useHistory();
console.log(props);
const my_lists = props.list;

return (
<ListStyle>
{my_lists.map((list, index) => {
return (
<ItemStyle

className="list_item"
key={index}
onClick={() => {

history.push(`/${list}`);
//    App.js usestate 연결

}}
>
    <MoveStyle>
{list}<StarRating/> <IoMdPerson style ={{cursor: "pointer"}}  size={50}/>
</MoveStyle>
   {/* 무브스타일로 리스트 , 스타레이팅, 사람 이모티콘을 컴포넌트 줬다. */}


</ItemStyle>
);
})}
</ListStyle>
);
};

const MoveStyle = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
Width : 300px;
`;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div`

padding: 16px;
margin: 8px;
background-color: aliceblue;
`;



export default BucketList;