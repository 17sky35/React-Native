import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Button from "./components/Button";
import Timer from "./components/Timer";
import Length from "./components/Length";

const Container = styled.View`
    flex:1;
    background-color:#fff;
    justify-content:center;
    align-items:center;
`

export default AppRegistry=()=>{
    const [isVisible,setIsVisible] = useState(true);
    return(
        <Container>
            {isVisible && <Form />}
            {/* 버튼을 누르면 Form 컴포넌트를 보였다가 숨겼다가 만들기
            버튼의 타이틀은 hide 또는 show로 바꾸기 */}
            <Button 
                title={isVisible?"hide":"show"} 
                onPress={()=>setIsVisible(isVisible=>!isVisible)}
            />
            {/* <Timer /> */}
            <Length />
        </Container>
    )
}