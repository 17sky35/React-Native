import React from "react";
import { Button,View,Text } from "react-native";

const UserList = ({navigation}) => {
    const users = [
        { id: '1', name: 'John Doe', email: 'john@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        { id: '3', name: 'Alice Johnson', email: 'alice@example.com' },
    ];
    const _onPress = user => {
        navigation.navigate("UserProfile",{id:user.id,name:user.name,email:user.email})
    }

    return(
        <View>
            <Text>유저 목록</Text>
            {users.map(user => (
                <View>
                    <Text>{user.name}</Text>
                    <Button 
                        key={user.id}
                        title={`${user.name}의 Profile`}
                        onPress={()=>_onPress(user)}
                    />
                </View>
            ))}
        </View>
    )
}
export default UserList