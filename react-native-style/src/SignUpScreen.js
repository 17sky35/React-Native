import React from "react";
import styled from "styled-components";

const View = styled.View`
    alignItems:"center",
`
const TitleText = styled.Text`
    font-size:40px; 
`
const AText = styled.Text`
    font-size:20px; 
`
const TextInput = styled.TextInput`
    font-size:20px; 
`
const Button = styled.Pressable`
    background-color:blue;
`

const SignUpScreen = ()=>{
    return(
        <View>
            <TitleText>회원가입</TitleText>
            <AText>이름</AText>
            <TextInput placeholder="이름을 입력하세요" />
            <AText>이메일</AText>
            <TextInput placeholder="이메일을 입력하세요" />
            <AText>비밀번호</AText>
            <TextInput placeholder="비밀번호를 입력하세요" />
            <AText>비밀번호 확인</AText>
            <TextInput placeholder="비밀번호를 입력하세요" />
            {/* <Button>가입하기</Button> */}
        </View>
    )
}

export default SignUpScreen;