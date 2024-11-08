import React from "react";
import { Button } from "react-native";
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
export const FriendScreen = () => {
    return(
        <Container>
            <StyledText>
                친구목록
            </StyledText>
        </Container>
    )
}
export const ChatListScreen = ({navigation}) => {
    return(
        <Container>
            <StyledText>
                친구목록
            </StyledText>
            <Button title="채팅방 들어가기" onPress={()=>navigation.navigate("ChatDetail")}/>
        </Container>
    )
}
export const SettingsScreen = () => {
    return(
        <Container>
            <StyledText>
                설정화면입니다
            </StyledText>
        </Container>
    )
}