// import React, { Component } from 'react';
// import { View, Text, StyleSheet,SafeAreaView, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
// import Color from '../Utils/Color'
// import { horizontalScale, verticalScale, moderateScale, isTabDevice } from '../reusableComponents/DeviceInfo'
// import StringConstant from '../Utils/StringConstant';
// import TextInputComponent from '../CommonComponent/TextInputComponent'
// const tabMulFactor = isTabDevice() ? 0.25 : 0.0;
// import DropDownComponent from '../CommonComponent/DropDownComponent'
// import Toast from 'react-native-root-toast';
// import AttendanceUtil from '../Utils/AttendenceUtil'
// import RealmController from '../Database/Realm'
// import WebServices from '../reusableComponents/WebServices'
// var companyArray = []
// import ProgressDialog from '../reusableComponents/ProgressDialog'

// export default class RegistrationScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             companyName: '',
//             companyId: '',
//             lastName: '',
//             firstName: '',
//             loading: false,
//             type: 'registration'
//         };
//         companyArray = []
//     }
//     componentDidMount() {
//         this.fetchMastersDataFromServer()
//         this.getCompanyMasterValue()
//     }

//     fetchMastersDataFromServer = () => {
//         let requestObj = {}
//         requestObj = 'getMasterData?type=company'
//         WebServices.master_service(requestObj, response => {
//             if (response.status_code == 404 || response.status_code == 403 || response.status_code == 500) {
//                 //do nothing
//             }
//             else if (response.status == 'success') {
//                 let masterRecord = response.master_data;
//                 masterRecord.forEach(function (item, index) {
//                     RealmController.insertUpdateMasterRecord({
//                         id: item.id,
//                         name: item.name == null ? '' : item.name,
//                         latitude: item.latitude == null ? '' : item.latitude,
//                         longitude: item.longitude == null ? '' : item.longitude,
//                         parent_id: item.parent_id == null ? '' : item.parent_id.toString(),
//                         working_days: item.working_days == null ? '' : item.working_days.toString(),
//                         address: item.address == null ? '' : item.address,
//                         type: item.type == null ? '' : item.type,
//                         weekedDays: item.weekend_days == null ? '' : item.weekend_days,
//                     });
//                 });

//             }
//         })
//     }


//     getCompanyMasterValue() {
//         const company = RealmController.getMasterValues('company')
//         {
//             company.map((value, index) => {
//                 companyArray.push(value.name)
//             })
//         }
//     }
//     selectCompany = (index, value) => {
//         this.setState({ companyName: value, companyId: RealmController.getIdByTypeName("company", value) })
       
//     }
//     setFirstName = (value) => {
//         this.setState({ firstName: value })
//     }
//     setLastName = (value) => {
//         this.setState({ lastName: value })
//     }
//     setPersonalEmailId = (value) => {
//         this.setState({ personalEmailId: value })
//     }
//     setCompanyEmailId = (value) => {
//         this.setState({ companyEmailId: value })
//     }
//     setMobileNumber = (value) => {
//         this.setState({ mobileNumber: value })
//     }
//     registerUser = () => {

//         if (AttendanceUtil.isEmptyValue(this.state.companyName)) {
//             Toast.show(StringConstant.plzSelectCompany)
//         } else if (AttendanceUtil.isEmptyValue(this.state.firstName)) {
//             Toast.show(StringConstant.plzEnterFirstName)
//         } else if (this.state.firstName.length < 3) {
//             Toast.show(StringConstant.validEnterFirstName)
//         } else if (AttendanceUtil.isEmptyValue(this.state.lastName)) {
//             Toast.show(StringConstant.plzEnterLastName)
//         } else if (AttendanceUtil.isEmptyValue(this.state.personalEmailId)) {
//             Toast.show(StringConstant.plzEnterPersonalEmailId)
//         } else if (!AttendanceUtil.isValidEmaiID(this.state.personalEmailId)) {
//             Toast.show(StringConstant.validEnterPersonalEmailId)
//         } else if (AttendanceUtil.isEmptyValue(this.state.companyEmailId)) {
//             Toast.show(StringConstant.plzEnterCompanyEmailId)
//         } else if (!AttendanceUtil.isValidEmaiID(this.state.companyEmailId)) {
//             Toast.show(StringConstant.validEnterCompanyEmailId)
//         } else if (this.state.companyEmailId === this.state.personalEmailId) {
//             Toast.show(StringConstant.canNotSameEmailId)
//         } else if (AttendanceUtil.isEmptyValue(this.state.mobileNumber)) {
//             Toast.show(StringConstant.plzEnterMblNum)
//         } else if (this.state.mobileNumber.length < 10) {
//             Toast.show(StringConstant.plzEnterValidMblNum)
//         } else if (this.state.mobileNumber.charAt(0) < 6) {
//             Toast.show(StringConstant.plzEnterValidMblNum)
//         } else {
//             let registrationObj = {}
//             registrationObj.companyId = this.state.companyId
//             registrationObj.companyName = this.state.companyName
//             registrationObj.firstName = this.state.firstName
//             registrationObj.lastName = this.state.lastName
//             registrationObj.personalEmailId = this.state.personalEmailId
//             registrationObj.companyEmailId = this.state.companyEmailId
//             registrationObj.mobileNumber = this.state.mobileNumber
//             this.setState({ loading: true }, () => {
//                 this.getOtpService(registrationObj)
//             })
//         }
//     }
    
//     getOtpService = (registrationObj) => {
//         let requestObj = {}
//         requestObj.type = this.state.type
//         requestObj.mobile_number = this.state.mobileNumber
//         WebServices.getOtp_service(requestObj, response => {
//             this.setState({ loading: false })
//             if (response.status_code == 404 || response.status_code == 403 || response.status_code == 500) {
//                 Toast.show(response.error)
//             }
//             else if (response.status == 'success') {
//                 this.props.navigation.push('LoginScreen', { registrationObj: registrationObj, type: 'registration' })
//             }
//             else if (response.status == 'error') {
//                 Toast.show(response.data)
//             } 
//             else {
//                 Toast.show(StringConstant.somethingWentWrong)
//             }
//         })
//     }
//     render() {
//         return (
// <SafeAreaView style={{ flex: 1}}>
//             <ProgressDialog animating={this.state.loading} />
//             <ScrollView style={{ flex: 1, }} contentContainerStyle={{ alignItems: 'center' }}>
//             <View style={{ alignItems: 'center' }}>
//                         <Image style={{ alignItems: 'center', width: horizontalScale(115), height: verticalScale(115) }}
//                             source={require('../Assets/ic_launcher.png')}
//                             resizeMode="contain" />
//                         <Text numberOfLines={1} style={{ top: moderateScale(10), fontSize: moderateScale(25), height: moderateScale(50) }}>{StringConstant.appName}</Text>
//                     <DropDownComponent onSelect={this.selectCompany} dropDownText={StringConstant.company}
//                         isRequired={true} dropDownArray={companyArray} marginTop={moderateScale(14, tabMulFactor)}
//                         marginBottom={0} />
                        
                        
//                     </View>
//                     <TextInputComponent isRequired={true}
//                         placeholder={StringConstant.placeholderFirstName}
//                         type='Name'
//                         keyboardType={'default'}
//                         headerText={StringConstant.firstName} onChangeText={(text) => {
//                             this.setFirstName(text)
//                         }} text={this.state.firstName} marginTop={moderateScale(14, tabMulFactor)}
//                         marginBottom={0} />
//                         <TextInputComponent isRequired={true}
//                         placeholder={StringConstant.placeholderLastName}
//                         type='Name'
//                         keyboardType={'default'}
//                         headerText={StringConstant.lastName} onChangeText={(text) => {
//                             this.setLastName(text)
//                         }} text={this.state.lastName} marginTop={moderateScale(14, tabMulFactor)}
//                         marginBottom={0} />
//                     <TextInputComponent isRequired={true}
//                         placeholder={StringConstant.placeholderPersonalEmailId}
//                         type='Name'
//                         keyboardType={'default'}
//                         headerText={StringConstant.personalEmailId} onChangeText={(text) => {
//                             this.setPersonalEmailId(text)
//                         }} text={this.state.personalEmailId} marginTop={moderateScale(14, tabMulFactor)}
//                         marginBottom={0} />
//                     <TextInputComponent isRequired={true}
//                         placeholder={StringConstant.placeholderCompanyEmailId}
//                         type='Name'
//                         keyboardType={'default'}
//                         headerText={StringConstant.companyEmailId} onChangeText={(text) => {
//                             this.setCompanyEmailId(text)
//                         }} text={this.state.companyEmailId} marginTop={moderateScale(14, tabMulFactor)}
//                         marginBottom={0} />
//                     <TextInputComponent isRequired={true}
//                         placeholder={StringConstant.placeholderMobileNumber}
//                         type='Name'
//                         keyboardType={'number-pad'}
//                         maxLength={10}
//                         headerText={StringConstant.mobileNumber} onChangeText={(text) => {
//                             this.setMobileNumber(text)
//                         }} text={this.state.mobileNumber} marginTop={moderateScale(14, tabMulFactor)}
//                         marginBottom={0}
//                         onSubmitEditing={() => { this.registerUser() }} />
//                     <TouchableOpacity onPress={() => this.registerUser()} style={{
//                         height: moderateScale(55), width: '90%', backgroundColor: Color.Header, borderRadius: moderateScale(5), justifyContent: 'center', marginTop: moderateScale(14, tabMulFactor),
//                         marginBottom: moderateScale(14, tabMulFactor), alignItems: 'center'
//                     }}>
//                         <Text numberOfLines={1} style={{ fontSize: moderateScale(20), fontWeight: '500', color: Color.White }}>{StringConstant.registration}</Text>
//                     </TouchableOpacity>
//             </ScrollView>
//         </SafeAreaView>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         height: Dimensions.get('window').height - moderateScale(56),
//         width: Dimensions.get('window').width,
//         backgroundColor: Color.Light_Gray,
//     },
// });
