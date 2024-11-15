import React,{useState,useRef,useEffect, useContext} from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Input,Button } from "../components/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Alert } from "react-native";
import { ProgressContext } from "../contexts/index";
import { createChannel } from "../utils/firebase";

const Container = styled.View`
    flex:1;
    background-color:${({theme})=>theme.background};
    justify-content:center;
    align-items:center;
    padding:0 20px;
`
const ErrorText = styled.Text`
    align-items:flex-start;
    width:100%;
    height:20px;
    margin-bottom:10px;
    line-height:20px;
    color:${({theme})=>theme.ErrorText};
`

const ChannelCreation = ({navigation}) => {

    const {spinner} = useContext(ProgressContext);
    //제목을 관리하는 상태
    const [title,setTitle] = useState("");
    //내용을 관리하는 상태
    const [description,setDescription] = useState("");
    //에러 메시지 관리하는 상태
    const [errorMessage,setErrorMessage] = useState("");
    const [disabled,setDisabled] = useState(true);

    const descriptionREF = useRef();

    //Input에 입력된 title을 state에 반영
    //title에 내용이 입려기 안될시 에러문구를 state에 반영
    const _handleTitleChange = title => {
        setTitle(title);
        setErrorMessage(title.trim()?"":"Please Enter the title");
    }
    //Create버튼 클릭시 db에 추가하기
    const _handleCreateButtonPress = async () => {
        try {
            //로딩 스피너 시작(사용자에게 시각적으로 작업중이다 라는걸 알림)
            spinner.start();
            //createChannel()함수를 호출하여 새 채널을 생성
            //title과 description을 전달
            //생성된 채널의 ID를 반환받는다.
            const id = await createChannel({title,description});
            console.log(id);
            //생성된 채널의 세부 화면으로 이동
            //뒤로가기 버튼을 눌렀을 때 이전화면으로 돌아가지 않도록 처리
            navigation.replace("Channel",{id,title});
        } catch (error) {
            Alert.alert("Creation Error",error.message)
        }finally{
            spinner.stop();
        }
    }

    //title,description,errorMessage가 변경될 때마다 실행
    useEffect (()=> {
        setDisabled(!(title&&!errorMessage));
    },[title,description,errorMessage])

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{flex:1}}
            extraScrollHeight={20}
        >
            <Container>            
                <Input
                    label="Title"
                    value={title}
                    onChangeText={_handleTitleChange}
                    onSubmitEditing={()=>{
                        setTitle(title.trim())
                        descriptionREF.current.focus()
                    }}
                    onBlur={()=>setTitle(title.trim())}
                    placeholder="Title"
                    returnKeyType="next"
                    maxLength={20}
                />
                <Input
                    label="Description"
                    value={description}
                    onChangeText={text=>setDescription(text)}
                    onSubmitEditing={()=>{
                        setDescription(description.trim())
                        _handleCreateButtonPress();
                    }}
                    ref={descriptionREF}
                    onBlur={()=>setDescription(description.trim())}
                    placeholder="Description"
                    returnKeyType="done"
                    maxLength={40}
                />
                <ErrorText>{errorMessage}</ErrorText>   
                <Button
                    title="Create"
                    onPress={_handleCreateButtonPress}
                    disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}
export default ChannelCreation;