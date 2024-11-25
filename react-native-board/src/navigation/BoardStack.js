import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainScreen from "../screens/MainScreen";
import WriteScreen from "../screens/WriteScreen";
import {AntDesign} from "@expo/vector-icons"
import { Pressable,Text,View,StyleSheet } from "react-native";

const stack = createStackNavigator();

const BoardStack = () => {


    return(
        <stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:"#1e1e1e",
                },
                headerTitleStyle:{
                    color:"white",
                },
                headerTitleAlign:"center",
            }}
        >
            <stack.Screen 
                name="Main" 
                component={MainScreen} 
                options={{
                    title:"게시글 목록"
                }}
            />
            <stack.Screen 
                name="Write" 
                component={WriteScreen} 
                options={({navigation})=>({
                    title:"글쓰기",
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} style={{marginLeft:20}}>
                            <AntDesign
                                name="close" 
                                size={24} 
                                color="white" 
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable style={{marginRight:20}}>
                            <View style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>등록</Text>
                            </View>
                        </Pressable>
                    ),
                })}
            />
        </stack.Navigator>
    )
}

const styles = StyleSheet.create({
    saveButton:{
        backgroundColor:"#2ecc71",
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:8,
    },
    saveButtonText:{
        color:"#fff",
        fontSize:16,
    }
})

export default BoardStack;