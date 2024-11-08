import React, { useState } from "react";
import { Button, ScrollView, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#333;
`
const StyledText = styled.Text`
    font-size:30px;
    color:#ffffff
`
export const HomeScreen = () => {
    return(
        <Container>
            <StyledText>
                Welcom to ShopApp
            </StyledText>
        </Container>
    )
}
export const CartScreen = () => {
    const [items,setItems] = useState([]);
    
    // const _onPress = () => {
    //     alert("아이템 추가")
    // }
    return(
        <Container>
            <StyledText>
                your Cart is Empty
            </StyledText>
            <Button 
                title="AddItem" 
                // onPress={_onPress}/>
                onPress={()=>{
                    setItems([...items,<StyledText>아이템추가</StyledText>])
                }}/>
            <ScrollView>
                {items.length !== 0 &&(items.map(item=>(
                    <StyledText>{item}</StyledText>
                )))}
            </ScrollView>
        </Container>
    )
}
export const ProfileScreen = () => {
    return(
        <Container>
            <StyledText>
                your Profile
            </StyledText>
        </Container>
    )
}