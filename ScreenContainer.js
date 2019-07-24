import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/pages/Home'; 

const NavigationStack = createStackNavigator({
    Home: { 
        screen: Home,
    },
});

const Container = createAppContainer(NavigationStack);

export default Container; 
