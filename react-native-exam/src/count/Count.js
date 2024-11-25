import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Count = () => {

    const [count,setCount] = useState(0);

    return(
        <View>
            <Text>{count}</Text>
            <Button title="+1" onPress={()=>setCount(count+1)}/>
            <Button title="-1" onPress={()=>setCount(count-1)}/>
        </View>
    )
}
export default Count;