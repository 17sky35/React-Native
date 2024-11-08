import React from "react";
import { Text, View } from "react-native";

const UserProfile = ({route}) => {
    return(
        <View>
            <Text>UserProfile</Text>
            <Text>Name : {route.params.name}</Text>
            <Text>Email : {route.params.email}</Text>
        </View>
    )
}
export default UserProfile