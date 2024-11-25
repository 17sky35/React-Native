import React,{useState} from "react";
import { View, Text,TextInput,StyleSheet,Pressable } from "react-native";

const WriteScreen = () => {

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [content,setContent] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.label}>제목</Text>
                <TextInput 
                    onChangeText={(text)=>setTitle(text)}
                    style={styles.input} 
                    placeholder="제목을 입력하세요" 
                    placeholderTextColor="#aaa" 
                />
                <Text style={styles.label}>작성자</Text>
                <TextInput 
                    onChangeText={(text)=>setAuthor(text)}
                    style={styles.input} 
                    placeholder="작성자를 입력하세요" 
                    placeholderTextColor="#aaa" 
                />
                <Text style={styles.label}>내용</Text>
                <TextInput 
                    onChangeText={(text)=>setContent(text)}
                    style={[styles.input,styles.contentInput]} 
                    placeholder="내용을 입력하세요" 
                    placeholderTextColor="#aaa" 
                    multiline
                />
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1e1e1e",
        padding:16,
    },
    contentContainer:{
        flex:1,
    },
    label:{
        color:"#fff",
        fontSize:16,
        marginBottom:8,
    },
    input:{
        borderWidth:1,
        borderColor:"#333",
        padding:12,
        borderRadius:8,
        color:"#fff",
        marginBottom:16,
    },
    contentInput:{
        height:100,
        textAlignVertical:"top",
    },

})

export default WriteScreen;