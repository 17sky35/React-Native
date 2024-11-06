import React from "react";
import styled from "styled-components";
import User from "./components/User";
import { UserProvider }  from "./context/User";
import Input from "./components/Input";
import ThemedComponent from "./components/ThemedComponent";
import { ThemeProvider } from "./context/ThemeContext";
import CartScreen from "./components/CartScreen";
import { CartProvider } from "./context/CartContext";
import UserScreen from "./components/UserScreen";
import { UserProvider2 } from "./context/UserContext";

const Container = styled.View`
    flex:1;
    background-color:#ffffff;
    justify-content:center;
    align-items:center;
`

export default App=()=>{
    return(
        // <UserProvider value={{name:"HyunJun"}}>
        //     <Container>
        //         <User />
        //         <Input />
        //     </Container> 
        // </UserProvider>
        //-----------------------------------------------
        // <ThemeProvider>
        //     <ThemedComponent />
        // </ThemeProvider>
        //-----------------------------------------------
        // <CartProvider>
        //     <CartScreen />
        // </CartProvider>
        //-----------------------------------------------
        <UserProvider2>
            <UserScreen />
        </UserProvider2>
    )
}