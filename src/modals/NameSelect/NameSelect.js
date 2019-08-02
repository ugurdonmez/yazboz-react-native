import React, { Component } from 'react'
import { StyleSheet, View, Modal } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

class NameSelect extends Component {
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 100 }}>
                    <View>
                        <Text h4 style={{
                            textAlign: 'center',
                            color: 'grey'
                        }}>Oyuncu isimlerini giriniz</Text>

                        <Input
                            label='Oyuncu 1:'
                            placeholder='BASIC INPUT'
                            onChangeText={(text) => this.props.onPlayerNameChanged(0, text)}
                            value={this.props.players[0]}
                        />

                        <Input
                            label='Oyuncu 2:'
                            placeholder='BASIC INPUT'
                            onChangeText={(text) => this.props.onPlayerNameChanged(1, text)}
                            value={this.props.players[1]}
                        />

                        <Input
                            label='Oyuncu 3:'
                            placeholder='BASIC INPUT'
                            onChangeText={(text) => this.props.onPlayerNameChanged(2, text)}
                            value={this.props.players[2]}
                        />

                        <Input
                            label='Oyuncu 4:'
                            placeholder='BASIC INPUT'
                            onChangeText={(text) => this.props.onPlayerNameChanged(3, text)}
                            value={this.props.players[3]}
                        />


                        <Button
                            onPress={this.props.modalClose}
                            title='Kaydet' />

                    </View>
                </View>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayerNameChanged: (index, name) => dispatch({
            type: 'PLAYER_NAME_UPDATE',
            payload: {
                index,
                name,
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameSelect);