import React,{useRef, useState} from "react";
import styled from "styled-components";
import { Image,Input } from "../components/index";
import { images } from "../utils/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:${({theme})=>theme.background};
    padding:20px;
`
const Login = ({navigation}) => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const passwordRef = useRef();
    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}
        >
            <Container>
                <Image url={images.logo} imageStyle={{borderRadius:20}} />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    onSubmitEditing={()=>passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    onSubmitEditing={()=>{}}
                    placeholder="Password"
                    returnKeyType="done"
                />                
            </Container>
        </KeyboardAwareScrollView>
    )
}
export default Login