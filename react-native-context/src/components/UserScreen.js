import React, {useContext} from "react";
import { View,Text,Button } from "react-native";
import UserContext2 from "../context/UserContext";

const UserScreen = () => {
    const {user,login,logout} = useContext(UserContext2);

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:user?"#fff":"#333"}}>
            {user?(
                <>
                    <Text>welcome:{user.name}</Text>
                    <Button title="Logout" onPress={logout}/>
                </>
            ):(
                <Button title="login" onPress={login}/>
            )}
        </View>
    )
}
export default UserScreen;