import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BoardStack from './navigation/BoardStack';
import { BoardContext } from './context/BoardContext';
 

const App = () => {

    const [boardList, setBoardList] = useState([]);
    return(
        <BoardContext.Provider value={{boardList, setBoardList}}>
            <NavigationContainer>
                    <BoardStack />
            </NavigationContainer>
        </BoardContext.Provider>
    );
}

export default App;