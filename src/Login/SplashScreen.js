import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import StringConstants from '../Utils/StringConstant'
import { StackActions } from '@react-navigation/native';
class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // this.checkAndGenerateAuthToken()
        setTimeout(
            () => {
                this.moveToNextScreen();
            }, 3000
        );
    }
    // checkAndGenerateAuthToken() {
    //     let authToken = AttendAnceUtil.getAuthToken();
    //     if (authToken == null) {  //Token is not yet genreated..
    //         WebServices.token_service(response => {

    //             //On successful request save token to Realm
    //             RealmController.insertUpdateAppStateKey({
    //                 appKey: 'AttendanceMhril',
    //                 auth_token: response.access_token
    //             });
    //             this.fetchMastersDataFromServer();
    //         })
    //     }
    //     else {
    //         //When token is already available..
    //         this.fetchMastersDataFromServer();
    //     }
    // }
    // fetchMastersDataFromServer = () => {
    //     let requestObj = {}
    //     requestObj = 'getMasterData?type=all'
    //     WebServices.master_service(requestObj, response => {
    //         if (response.status_code == 404 || response.status_code == 403 || response.status_code == 500) {
    //             //do nothing
    //         }
    //         else if (response.status == 'success') {
    //             let masterRecord = response.master_data;
    //             masterRecord.forEach(function (item, index) {
    //                 RealmController.insertUpdateMasterRecord({
    //                     id: item.id,
    //                     name: item.name == null ? '' : item.name,
    //                     latitude: item.latitude == null ? '' : item.latitude,
    //                     longitude: item.longitude == null ? '' : item.longitude,
    //                     parent_id: item.parent_id == null ? '' : item.parent_id.toString(),
    //                     working_days: item.working_days == null ? '' : item.working_days.toString(),
    //                     address: item.address == null ? '' : item.address,
    //                     type: item.type == null ? '' : item.type,
    //                     weekedDays: item.weekend_days == null ? '' : item.weekend_days,
    //                 });
    //             });
    //         }
    //     })
    // }


    moveToNextScreen = () => {
        // if(AttendAnceUtil.isUserLoggedIn()){
        //     this.props.navigation.dispatch(
        //         StackActions.replace('HomeScreen')
        //     );
        // }else{
        this.props.navigation.dispatch(
            StackActions.replace('LoginScreen')
        );
        // }

    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex:1 }}>
                <Text>{StringConstants.appointmentManager}</Text>
                {/* <StatusBar
                    backgroundColor={Color.App_Background}
                    barStyle="dark-content"
                />
                <Image style={{ width: horizontalScale(180), height: verticalScale(195) }}
                    source={require('../Assets/CMH.png')}
                    resizeMode="contain" /> */}
            </View >
        );
    }
}

export default SplashScreen