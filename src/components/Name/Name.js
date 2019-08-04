import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types';

class Name extends Component {

    static propTypes = {
        name: PropTypes.string,
        reward: PropTypes.number,
        punish: PropTypes.number,
    }

    render() {
        let rewards = []

        let i = 0;
        for (; i < this.props.reward; i++) {
            rewards.push(<Icon
                key={i} 
                style={styles.icon} 
                name="Triangle" 
                height="15" 
                width="15" />)
        }
        for (; i < 2; i++) {
            rewards.push(<Icon 
                key={i}
                style={styles.icon} 
                name="TriangleEmpty" 
                height="15" 
                width="15" />)
        }

        let punishes = []
        i = 0;
        for (; i < this.props.punish; i++) {
            punishes.push(<Icon 
                key={i}
                style={styles.icon} 
                name="Circle" 
                height="15" 
                width="15" />)
        }
        for (; i < 3; i++) {
            punishes.push(<Icon 
                key={i}
                style={styles.icon} 
                name="CircleEmpty" 
                height="15" 
                width="15" />)
        }

        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>{this.props.name}</Text>

                <View style={styles.iconContainer}>
                    {rewards}
                </View>

                <View style={styles.iconContainer}>
                    {punishes}
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '20%',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderStyle: 'solid',
    },
    icon: {
        margin: 3,
    },
    nameText: {
        textAlign: 'center',
    }
})

export default Name
