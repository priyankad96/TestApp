/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';




export default class App extends Component<Props> {
    constructor(){
        super();
        console.log('inside constructor');
    }
    componentWillMount(): void {
        console.log('Component will mount');
    }
    componentDidMount(): void {
        console.log('component did mount');
    }

    render() {
        console.log('inside render');
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
