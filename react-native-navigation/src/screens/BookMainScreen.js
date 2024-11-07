import React from 'react';
import {Button} from 'react-native'
import styled from 'styled-components';

const Container = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items : center;
`
const StyledText = styled.Text`
    font-size: 20px;
    margin-bottom: 20px;
`

const BookMainScreen = ({navigation}) => {
    return(
        <Container>
            <StyledText>도서 목록 앱</StyledText>
            <Button 
                title="도서 목록 보기"
                onPress={()=>navigation.navigate("BookListScreen")}
            />
        </Container>
    )
}
export default BookMainScreen