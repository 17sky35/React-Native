import React, { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.View`
    flex:1
    justify-content:center;
    align-items:center;
    background-color:${({color}) => color};
`
const ChangeColorButton = styled.Pressable`
    padding:16px
    background-color:#3498db;
    border-radius:8px;
`
const ButtonText=styled.Text`
    color:white;
    font-size:18px;
`

const ChangeColor = () => {
    const [bgColor,setBgColor] = useState("#ffffff");
    const changeColor =()=>{
        setBgColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    }
    return(
        <AppContainer color={bgColor}>
            <ChangeColorButton onPress={changeColor}>
                <ButtonText>Change BackgroundColor</ButtonText>
            </ChangeColorButton>
        </AppContainer>
    )
}
export default ChangeColor;