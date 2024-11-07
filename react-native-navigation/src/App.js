import React from "react";
import StackNavigation from "./navigations/Stack";
import { NavigationContainer } from "@react-navigation/native";
import BookStackNavigation from "./navigations/BookStack";

const App = () => {
    return(
        <NavigationContainer>       
            <BookStackNavigation />
        </NavigationContainer>
    )
}
export default App;