import React , { Component } from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import Container from './ScreenContainer';



const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};


export default class App extends Component<{}> {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Container />
      </ThemeContext.Provider>
    );
  }
}
