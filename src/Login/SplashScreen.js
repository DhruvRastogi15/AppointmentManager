import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';
import Color from '../Utils/Color'
class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        setTimeout(
            () => {
                this.moveToNextScreen();
            }, 3000
        );
    }

    moveToNextScreen = () => {
        this.props.navigation.dispatch(
            StackActions.replace('LoginScreen')
        );
    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Color.White }}>
                <Image
                    style={{ height: 200, width: 200 }}
                    source={require('../Assets/Tattoosphere.png')}
                    resizeMode="contain">
                </Image>
            </View>
        );
    }
}

export default SplashScreen