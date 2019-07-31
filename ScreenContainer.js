import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/pages/Home';
import Game from './src/pages/Game';
import Rules from './src/pages/Rules'

const NavigationStack = createStackNavigator({
    homeScreen: { 
        screen: Home,
    },
    gameScreen: {
        screen: Game,
    },
    rulesScreen: {
        screen: Rules,
    }
});

const Container = createAppContainer(NavigationStack);

export default Container; 
