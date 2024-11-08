import React from "react";
import { Mail,Meet,Settings } from "../screens/Tab/TabScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"

//이름, 크기, 색깔만 주면 아이콘 컴포넌트를 만들어주는 함수
const TabIcon = ({name,size,color}) => {
    return(
        <MaterialCommunityIcons
            name={name} 
            size={size} 
            color={color}
        />
    )
}

//1. Tab네비게이션 생성
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Settings"
            screenOptions={({route})=>({
                tabBarIcon: props => {
                    let name = "";
                    if (route.name === "Mail") name = "email";
                    else if(route.name === "Meet") name = "video";
                    else name = "cog";
                    return TabIcon({...props, name})
                },
                tabBarLabelPosition:"beside-icon",
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:"#54b7f9",
                    borderTopColor:"#ffffff",
                    borderTopWidth:5,
                },
                tabBarActiveTintColor:"#ffffff",//선택된 아이콘 색깔
                tabBarInactiveTintColor:"#0b92e9"//선택안된 아이콘 색깔
            })}
        >
            <Tab.Screen 
                name="Mail" 
                component={Mail} 
                options={{
                    tabBarLabel:"Inbox",
                    tabBarIcon: props =>
                        TabIcon({
                            ...props,name: props.focused ? "email" : "email-outline"
                        })
                }}
                // options={{
                //     tabBarIcon: props=> TabIcon({...props,name:"email"})
                // }}
            />
            <Tab.Screen 
                name="Meet" 
                component={Meet}
                options={{
                    tabBarLabel:"Inbox",
                    tabBarIcon: props =>
                        TabIcon({
                            ...props,name: props.focused ? "video" : "video-outline"
                        })
                }}
                // options={{
                //     tabBarIcon: props=> TabIcon({...props,name:"video"})
                // }}
            /> 
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarLabel:"Inbox",
                    tabBarIcon: props =>
                        TabIcon({
                            ...props,name: props.focused ? "cog" : "cog-outline"
                        })
                }}
                // options={{
                //     tabBarIcon: props=> TabIcon({...props,name:"cog"})
                // }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator