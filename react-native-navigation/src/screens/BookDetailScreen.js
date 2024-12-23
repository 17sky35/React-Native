import React,{useLayoutEffect} from 'react'
import styled from 'styled-components'
import {MaterialCommunityIcons} from "@expo/vector-icons"

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
`

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`
const BookDetailScreen = ({navigation,route}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitleVisible:false,
            headerTintColor:"#ffffff",
            headerLeft:({onPress,tintColor}) => {
                return(
                    <MaterialCommunityIcons
                        name='keyboard-backspace'
                        size={30}
                        style={{marginLeft:11}}
                        color={tintColor}
                        onPress={onPress}
                    />
                )
            },
            headerRight:({tintColor})=>{
                return(
                    <MaterialCommunityIcons
                    name='home-variant'
                    size={30}
                    style={{marginRight:11}}
                    color={tintColor}
                    onPress={()=>navigation.popToTop()}
                    />
                )
            }
        })
    },[])
    return(
        <Container>
            <StyledText>{route.params.title}</StyledText>
            <StyledText>{route.params.description}</StyledText>
        </Container>
    )
}

export default BookDetailScreen;