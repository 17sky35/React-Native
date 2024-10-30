import React from "react";
import { Text,View,StyleSheet,ScrollView } from "react-native";
import { textStyles, viewStyles } from "./styles";
import { Header,Contens,Footer } from "./components/Layout";
import FlexDirectionTest from "./components/flexDirectionTest";
import JustifyContentTest from "./components/justifyContentTest";
import AlignItemsTest from "./components/alignItemsTest";
import ShadowBox from "./components/ShadowBox";
import {Styled} from "./components/StyledComponent";
import Button from "./components/Button";
import styled from "styled-components";
import SignUpScreen from "./SignUpScreen";

const Container = styled.View`
    flex:1;
    background-color:center;
    align-items:center;
    justify-content:center;
`

export default function App(){
    return(
        <ScrollView>
            {/* <View style={viewStyles.container}>
                인라인과 클래스 스타일 혼용사용 가능
                뒤에 오는 스타일이 앞의 스타일 덮어쓴다.
                <Text style={[textStyles.text,{color:"green"}]}>Inline-Styling - Text</Text>
                <Text style={[textStyles.text,textStyles.error]}>Inline-Styling - Error</Text>
                <Header />
                <Contens />
                <Footer />
                <FlexDirectionTest />
                <JustifyContentTest />
                <AlignItemsTest />
                <ShadowBox />
                <Styled />
            </View>
            <Container>
            <Button title="Hanbit"/>
            <Button title="React Native"/>
            </Container> */}
            <SignUpScreen />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        padding:10,
        fontSize:26,
        fontWeight:"600",
        color:"black"
    },
    error:{
        fontWeight:"300",
        color:"orange"
    }
    
});