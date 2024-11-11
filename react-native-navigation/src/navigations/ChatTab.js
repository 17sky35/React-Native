import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { FriendScreen,SettingsScreen } from "../screens/Tab/ChatTabScreens";
import ChatStack from "./ChatStack";

const Tab = createBottomTabNavigator();

const TabIcon = ({name,size,color}) =>{
    return(
        <MaterialCommunityIcons
            name={name}
            size={size}
            color={color}
        />
    )
}

const ChatTab = () => {
    return(
        <Tab.Navigator
            initialRouteName="Friend"
            screenOptions={({route})=>({
                tabBarIcon: props => {
                    let name="";
                    if(route.name === "Friend") name="dog";
                    else if(route.name ==="ChatList") name="chat";
                    else name="cog";
                    return TabIcon({...props,name})
                }
            })}
        >
            <Tab.Screen
                name="Friend"
                component={FriendScreen}
            />
            <Tab.Screen
                name="Chat"
                component={ChatStack}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </Tab.Navigator>        
    )
}
export default ChatTab