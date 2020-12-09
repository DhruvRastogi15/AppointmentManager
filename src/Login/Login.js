import React, { Component } from 'react';

import { View, Animated, Text, SafeAreaView, ScrollView } from 'react-native';
import Color from '../Utils/Color'
// import { horizontalScale, verticalScale, moderateScale, isTabDevice } from '../ReusableComponents/DeviceInfo'
import { StackActions } from '@react-navigation/native';
// import { Calendar } from 'react-native-calendars';
// const tabMulFactor = isTabDevice() ? 0.25 : 0.0;
// import DeviceInfo from 'react-native-device-info';
// import RNOtpVerify from 'react-native-otp-verify';
// import AttendanceUtil from '../Utils/AttendenceUtil'
// import Toast from 'react-native-root-toast';
// import RealmController from '../Database/Realm'
// import WebServices from '../reusableComponents/WebServices'
// import ProgressDialog from '../reusableComponents/ProgressDialog'
// import Constant from '../Utils/Constants'
// import { Buffer } from "buffer";
var arr = [2020 - 12 - 16]

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markedNormal : [],
            markedMedium : [],
            markedBusy : [],
        };
    }

    componentDidMount() {

    }
    checkDataForDay = (date) => {
        alert(date)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{
                        marginVertical: 10, height: 50, backgroundColor: Color.White, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', elevation: 5, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62
                    }}>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 15, width: 15, borderRadius: 15 / 2, backgroundColor: Color.AMGreen }}></View>
                            <Text numberOfLines={2} style={{ marginTop: 3 }}>Normal</Text>
                        </View>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 15, width: 15, borderRadius: 15 / 2, backgroundColor: Color.AMBlue }}></View>
                            <Text numberOfLines={2} style={{ marginTop: 3 }}>Medium</Text>
                        </View>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 15, width: 15, borderRadius: 15 / 2, backgroundColor: Color.AMOrange }}></View>
                            <Text numberOfLines={2} style={{ marginTop: 3 }}>Busy</Text>
                        </View>
                    </View>
                    {/* <Calendar
                        style={{
                            width: '100%', borderRadius: 5, elevation: 5, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62
                        }}
                        //   current={this.state.currentDate}
                        markingType={'custom'}
                          markedDates={this.state.marked}
                        //   onMonthChange={(month) => this.onMonthChnage(month)}
                        //   renderArrow={this.renderArrow}
                        onDayPress={(day) => this.checkDataForDay(day.dateString)}
                        hideExtraDays={true}
                    //   disableArrowRight={this.state.disableArrowRight}
                    //   disableArrowLeft={this.state.disableArrowLeft}
                    /> */}
                </View>
            </View>
        );
    }
}
