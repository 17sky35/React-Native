import React from 'react'
import { Button,Text,View,Pressable } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
`

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`

const BookListScreen = ({navigation}) => {
    const books = [
        {id:"1",title:"홍길동전",description:"이것은 홍길동전의 설명입니다."},
        {id:"2",title:"콩쥐팥쥐",description:"이것은 콩쥐팥쥐의 설명입니다."},
        {id:"3",title:"신데렐라",description:"이것은 신데렐라의 설명입니다."},
        {id:"4",title:"우투리전",description:"이것은 우투리전의 설명입니다."},
        {id:"4",title:"운수좋은날",description:"이것은 운수좋은날의 설명입니다."},
    ]

    const _onPress = (book) => {
        navigation.navigate('Detail',{id:book.id,title:book.title,description:book.description})
    };

    return(
        <Container>
            <StyledText>도서 목록</StyledText>
            {books.map(book => (
                <View>
                <Text style={{fontSize:20}}>{book.title}</Text>
                <Button
                    key={book.id}
                    title="상세보기"
                    description={book.description}
                    onPress={() => _onPress(book)}
                />
                </View>
            ))}
        </Container>
    )
}

export default BookListScreen;