import React, { Component } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native';

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

                <View>
                    <Text>modal</Text>
                </View>
            </Modal>
        )
    }
}

export default NameSelect;