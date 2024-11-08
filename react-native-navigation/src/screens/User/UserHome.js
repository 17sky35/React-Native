import React from "react";
import { Button,View,Text } from "react-native";

const UserHome = ({navigation}) => {
    return(
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:50, color:"red"}}>웹컴투헬</Text>
            <Button title="유저 목록 보기" onPress={()=>navigation.navigate("UserList")}/>
        </View>
    )
}

export default UserHome