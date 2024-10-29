import React, { useState } from "react";
import { View,Text } from "react-native";
import MyButton from "./MyComponent";

const ToggleText = () => {
    const [open,setOpen] = useState(false);
    return(
        <View>
            <MyButton title="Click" onPress={()=>setOpen(!open)} />
            {open&&(<Text style={{fontSize:20, textAlign:"center"}}>This text can be ToggleText</Text>)}
        </View>
    )
}
export default ToggleText;
