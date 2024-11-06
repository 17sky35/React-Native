import React from "react";
import { View,Text,ScrollView,StyleSheet } from "react-native";
import { useScrollPosition } from "../hooks/useScrollPosition";

const ScrollComponent = () => {
    const {scrollPosition, handleScroll} = useScrollPosition();

    return(
        <ScrollView
            style={[styled.container,{backgroundColor:scrollPosition>100?"lightblue":"lightcoral"}]}
            onScroll={handleScroll}
        >
            <View style={styled.content}>
                <Text style={styled.text}>스크롤 위치에 따라 배경색이 바뀌어요!!</Text>
                {/* toFixed(자리수) : 지정된 소수점 자리수에서 반올림 해주고 문자열로 반환하는 메서드 */}
                <Text style={styled.text}>현재 스크롤 위치 : {scrollPosition.toFixed(0)}</Text>
            </View>
        </ScrollView>
    )
}

const styled = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        height:1000,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:24,
        color:"white",
        textAlign:"center",
        marginVertical:20
    }
})

export default ScrollComponent;