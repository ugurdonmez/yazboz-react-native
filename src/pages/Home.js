import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';
import NameSelect from '../modals/NameSelect/NameSelect';

class Home extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'King Skor Tablosu',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white',
    },
  });

  constructor(props, context) {
    super(props, context);
    this.forwardRules = this.forwardRules.bind(this);
  }

  forwardRules() {
    console.log('open rules pages')
    this.props.navigation.navigate('rulesScreen', { title: 'Oyun Kurallari' })
  }

  render() {
    return (
      <View>
        <NameSelect
          modalClose={this.modalClose}
          visible={this.state.modalVisible} 
        />

        <Button raised primary text="Yeni Oyun" onPress={() => {
            this.setModalVisible(true);
          }}/>
        <Button raised primary text="Kurallar" onPress={this.forwardRules}/>
      </View>
    );
  }
}

export default Home;