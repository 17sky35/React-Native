import React,{useState} from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledText = styled.Text`
    font-size:24px;
    margin:10px;
`
const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`
const Counter=()=>{
    const [count,setCount]=useState(0);    

    return(
        <Container>
            <StyledText>
                Count : {count}
            </StyledText>
            <Button title="+" onPress={()=>{setCount(count=>count+1)}}/>
            <Button title="-" onPress={()=>{setCount(count-1)}}/>
        </Container>
    )
}
export default Counter;