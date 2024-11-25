import React, { createContext, useState, useContext } from 'react';
import Count from "./count/Count";
import { View, Text, Button, StyleSheet } from "react-native";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = {
    isDarkMode,
    toggleTheme,
    styles: isDarkMode
      ? darkThemeStyles
      : lightThemeStyles,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { styles } = useContext(ThemeContext);
  return (
    <View style={[styles.container, styles.box]}>
      <Text style={styles.text}>7번 문제</Text>
    </View>
  );
};

const ThemeToggleButton = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  return (
    <Button
      title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
      onPress={toggleTheme}
    />
  );
};

const App = () => {

    return(
      /* 카운트
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <Count />
      </View>
      */
      <ThemeProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ThemedComponent />
          <ThemeToggleButton />
        </View>
      </ThemeProvider>
    
    )
}
const lightThemeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
});

const darkThemeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;