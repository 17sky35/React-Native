import React, { useState } from "react";
import { View,Text,Button } from "react-native";
import SV from "./ScrollView";
import MyButton from "./components/MyComponent";
import Counter from "./components/Counter";
import ToggleText from "./components/Toggle";
import Total from "./components/Total";
import ItemList from "./components/ItemList";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";
import Buttons from "./components/PressAbleTest";

const App = () => {
    const [arr,setArr] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [fruits,setFruits] = useState(['사과','포도','귤']);
    return(
        <View
            style={{
                flex:1,
                backgroundColor:"#fff",
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            {/* <Text style={{fontSize:30,marginBottom:10}}>Button Component</Text>
            <Button title="button" onPress={()=>alert("Click !!!")} />
            <MyButton title="button" onPress={()=>alert("props")} />
            부모 컴포넌트에서 자식 컴포넌트를 사용하면서 속성으로 props를 전달하는 방법외에
            컴포넌트 사이에서 값을 입력해서 전달하는 방법도 있다.
            <MyButton title="button" onPress={()=>alert("children")}>Children Props</MyButton>
            <MyButton onPress={()=>alert("default")} />
            <Counter/>
            <ToggleText />
            <Total arr={arr} />
            <ItemList item={fruits} />
            <EventButton />
            <EventInput /> */}
            <Buttons title="Press able"/>
        </View>
    )
}

export default App;