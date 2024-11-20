import React,{useContext} from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {

    const {id} = useParams();
    const {boardList,setBoardList} = useContext(BoardContext);
    const navigate = useNavigate();

    const board = boardList.find((board) => board.id === parseInt(id));
    const del = (id) =>{
        const updatedBoardList = boardList.filter((board) => board.id !== id)
        setBoardList(updatedBoardList);
        navigate("/");
    }
    return(
        <div>
            <h2>{board.title}</h2>
            <div>작성자: {board.author}</div>
            <div>{board.writingTime}</div>
            <div>{board.content}</div>
            <div>
                <CustomButton label="수정" onClick={()=>{}}/>
                <CustomButton label="삭제" onClick={del}/>
            </div>
        </div>
    )
}

export default PostDetail