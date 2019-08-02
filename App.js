import React, { Component } from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import Container from './ScreenContainer';
import reducer from './src/store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

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
      <Provider store={store}>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <Container />
        </ThemeContext.Provider>
      </Provider>
    );
  }
}
