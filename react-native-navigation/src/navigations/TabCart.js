import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen,CartScreen,ProfileScreen } from "../screens/Tab/TabCartScreens";
import {MaterialCommunityIcons} from "@expo/vector-icons"

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

const TabCart = () =>{
    return(
        <Tab.Navigator 
            initialRouteName="HomeScreen"
            screenOptions={({route})=>({
                tabBarIcon: props => {
                    let name = "";
                    let size = 27;
                    if(route.name === "Home") name="home";
                    else if(route.name === "Cart") name="cart";
                    else name="account";
                    return TabIcon({...props,size,name})
                },
                tabBarActiveTintColor:"blue",
                tabBarInactiveTintColor:"gray"
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
            />
            <Tab.Screen 
                name="Cart" 
                component={CartScreen}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}
export default TabCart