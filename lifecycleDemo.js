import React, { Component } from 'react';
import { AppRegistry, Text, View,TextInput } from 'react-native';

class Greeting extends Component {

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    constructor(){
        super();
        this.state = {text: ''};
        console.log('GREETING constructor1');
    }
    componentWillMount(): void {
        debugger;
        console.log('Component will mount1');
    }
    componentDidMount(): void {
        debugger;
        console.log('component did mount1');
    }
    componentWillUpdate(nextProps, nextState): void {
        debugger;
        console.log('component will update1');

    }
    componentDidUpdate(prevProps, prevState): void {
        debugger;
        console.log('component did upadate1');

    }
    componentWillReceiveProps(nextProps, nextContext): void {
        debugger;
        console.log('component will receive props');
    }

    render() {
        console.log('inside render');
        return (
            <View style={{alignItems: 'center', top: 50}}>
                <Greeting name='Rexxar' />

                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>

            </View>
        );
    }
}
