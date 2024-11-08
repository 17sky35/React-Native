import React from "react";
import StackNavigation from "./navigations/Stack";
import { NavigationContainer } from "@react-navigation/native";
import BookStackNavigation from "./navigations/BookStack";
import UserStackNavigation from "./navigations/UserStack";
import TabNavigator from "./navigations/Tab";
import TabCart from "./navigations/TabCart";
import ChatTab from "./navigations/ChatTab";

const App = () => {
    return(
        <NavigationContainer>       
            <ChatTab />
        </NavigationContainer>
    )
}
export default App;