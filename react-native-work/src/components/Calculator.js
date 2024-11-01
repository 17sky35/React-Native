import React from "react";
import styled from "styled-components";
import { TextInput,Text , View } from "react-native";

const ButtonContainer = styled.Pressable`
    width:40px
    background-color:"red";
`
const Container = styled.View`
    flex-direction:row;
    align-items:center; 
`
const Contents = styled.Text`
`
const StyledInput = styled.TextInput`
    height:20px;
`

const Calculator=()=>{
    return(
        <Container>
            <StyledInput />
            <StyledInput />
            <Contents>
                Enter numbers and select operation
            </Contents>
            <View>
                <ButtonContainer><Text>+</Text></ButtonContainer>
                <ButtonContainer><Text>-</Text></ButtonContainer>
                <ButtonContainer><Text>*</Text></ButtonContainer>
                <ButtonContainer><Text>/</Text></ButtonContainer>     
            </View>
        </Container>
    )
}
export default Calculator