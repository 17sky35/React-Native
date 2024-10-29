import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";

export default Total=(props)=>{
    const [sum,setSum] = useState(0);
    let arr = props.arr;

    useEffect(()=>{
    let total = arr.reduce((total, num)=>total+num,0)
    setSum(total);
    },[arr])

    return(
        <View>
            <Text>sum : {sum}</Text>
        </View>
    )
}

