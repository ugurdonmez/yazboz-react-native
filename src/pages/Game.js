import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import HandName from '../components/HandName/HandName';
import HandScore from '../components/HandScore/HandScore';
import Name from '../components/Name/Name';
import HandValues from '../modals/HandValues/HandValues';
import handValueMap from '../constants/HandValueMap';

class Game extends Component {
  state = {
    handValuesModalVisible: false,
  }

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    // title: `${navigation.state.params.title}`,
    headerTitle: 'Yeni Oyun',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerRight: (
      <Button
        style={styles.addButtonTitle}
        title='+'
        onPress={navigation.getParam('openHandValues')}
      />
    ),
  });

  componentDidMount() {
    this.props.navigation.setParams({ openHandValues: this.handValuesModalOpen });
  }

  handValuesModalOpen = () => {
    this.setState({
      handValuesModalVisible: true,
    })
  }

  handValuesModalClose = () => {
    this.setState({
      handValuesModalVisible: false,
    })
  }

  render() {
    let rows = [];

    let total = [0, 0, 0, 0];

    for (let i = 0; i < 20; i++) {
      if (this.props.hands[i]) {
        for (let j = 0; j < 4; j++) {
          total[j] += this.props.hands[i].scores[j] * handValueMap[this.props.hands[i].id].value;
        }
        rows.push(
          <View
            key={i}
            style={{
              flexDirection: 'row',
            }}>
            <HandName name={handValueMap[this.props.hands[i].id].name} />
            <HandScore score={this.props.hands[i].scores[0] * handValueMap[this.props.hands[i].id].value} />
            <HandScore score={this.props.hands[i].scores[1] * handValueMap[this.props.hands[i].id].value} />
            <HandScore score={this.props.hands[i].scores[2] * handValueMap[this.props.hands[i].id].value} />
            <HandScore score={this.props.hands[i].scores[3] * handValueMap[this.props.hands[i].id].value} />
          </View>)
      } else {
        rows.push(
          <View
            key={i}
            style={{
              flexDirection: 'row',
            }}>
            <HandName />
            <HandScore />
            <HandScore />
            <HandScore />
            <HandScore />
          </View>)
      }
    }

    rows.push(
      <View
        key={21}
        style={{
          flexDirection: 'row',
        }}>
        <HandName name="Toplam" />
        <HandScore score={total[0]} />
        <HandScore score={total[1]} />
        <HandScore score={total[2]} />
        <HandScore score={total[3]} />
      </View>
    )



    let names = this.props.players.map((p, index) =>
      <Name
        name={p}
        reward={this.props.playersHands[index][0]}
        punish={this.props.playersHands[index][1]}
      />
    )



    return (
      <View>
        <HandValues
          modalClose={this.handValuesModalClose}
          visible={this.state.handValuesModalVisible}
        />

        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{ width: '20%' }} />
          {names}
        </View>

        {rows}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  addButtonTitle: {
    fontSize: 16,
  }
})

const mapStateToProps = state => {
  return {
    players: state.players,
    hands: state.hands,
    playersHands: state.playersHands,
  }
}

export default connect(mapStateToProps)(Game)
