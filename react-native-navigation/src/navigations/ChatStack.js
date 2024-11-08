import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatListScreen } from "../screens/Tab/ChatTabScreens";
import ChatDetail from "../screens/Chat/ChatDetailScreen";


const Stack = createStackNavigator();

const ChatStack = () => {
    return(
        <Stack.Navigator initialRouteName="ChatList">
            <Stack.Screen name="ChatList" component={ChatListScreen}/>
            <Stack.Screen 
                name="ChatDetail" 
                component={ChatDetail}
            />
        </Stack.Navigator>
    )
}
export default ChatStack