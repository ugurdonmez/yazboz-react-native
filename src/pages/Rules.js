import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

class Rules extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: 'white',
        },
    });

    render() {
        return (
            <Text>rules</Text>
        );
    }
}

export default Rules;