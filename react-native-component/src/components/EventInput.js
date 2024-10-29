import React,{useState} from "react";
import { View,Text,TextInput } from "react-native";

const EventInput=()=>{

    //text를 저장할 state
    const [text,setText] = useState(null);

    const _onChange = event =>setText(event.nativeEvent.text)
    
    return(
        <View>
            <Text style={{margin:10,fontSize:30}}>text:{text}</Text>
            <TextInput 
                style={{padding:10,fontSize:20,borderWidth:1}}
                placeholder="Enter the Text"
                onChange={_onChange} 
            />
        </View>
    )
}
export default EventInput;