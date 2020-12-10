import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';
import Color from '../Utils/Color'
class RegistrationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Color.White }}>
                <Image
                    source={require('../Assets/AppLogo.png')}
                    resizeMode="contain">
                </Image>
            </View>
        );
    }
}

export default RegistrationScreen