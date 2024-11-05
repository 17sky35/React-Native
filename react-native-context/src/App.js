import React from "react";
import styled from "styled-components";
import User from "./components/User";

const Container = styled.View`
    flex:1;
    background-color:#ffffff;
    justify-content:center;
    align-items:center;
`

export default App=()=>{
    return(
        <Container>
            <User />
        </Container>
    )
}