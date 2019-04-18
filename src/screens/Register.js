import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Alert,DatePickerIOS} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Constant from '../helper/constant';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';


export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            fName: '',
            lName: '',
            uname: '',
            email: '',
            password: '',
            rePass: '',
            phoneNo: '',
            dob: '',
            DateText: new Date(),
        }

    }

    onRegClick = () => {
        debugger;
        fetch('http://localhost:3009/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fName: this.state.fName,
                lName: this.state.lName,
                uName: this.state.uName,
                email: this.state.email,
                password: this.state.password,
                phoneNo: this.state.phoneNo,
                dob: this.state.dob,

            })
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            // console.log(result);
            if (!result.error) {
                Alert.alert("User register successfully,...");
            } else {
                Alert.alert(result.error_msg);
                console.log(result);
            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    };
    onLoginClick = () => {
        this.props.navigation.navigate('Login');
    };

    DatePicker = () => {
        this.refs.DatePickerDialog.open({
            date: this.state.DateText,
        });
    };
    onDatePicked = (date) => {
        this.setState({
            DateText: date,
            dob: moment(date).format('DD-MMM-YYYY')
        });
    }

    render() {
        return (

            <View style={styles.mainContainer}>

                <ImageBackground source={{uri: 'imgBackground'}} style={styles.imgContainer}>
                    <View style={styles.subContent}>
                        <View style={styles.hbox}>
                            <View style={styles.iBox}>
                                <TouchableOpacity onPress={this.onLoginClick}>
                                    <Image source={{uri: 'arrow'}} style={styles.imgBox}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cBox}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 26, fontWeight: 'bold'}}>
                                        Create Account
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.dataContainer}>
                            <View style={styles.nbox}>
                                <View style={styles.nsBox}>

                                    <TextInput style={styles.header}
                                               placeholder={'FirstName'}
                                               onChangeText={text => {
                                                   this.setState({fName: text})
                                               }}
                                    />

                                </View>
                                <View style={[styles.nsBox, {marginLeft: 5}]}>

                                    <TextInput style={styles.header}
                                               placeholder={'LastName'}
                                               onChangeText={text => {
                                                   this.setState({lName: text})
                                               }}
                                    />
                                </View>
                            </View>
                            <View style={styles.rbox}>
                                <View style={styles.iBox}>
                                    <Image source={{uri: 'user'}} style={styles.imgBox}/>
                                </View>
                                <View style={styles.cBox}>

                                    <View>
                                        <TextInput style={styles.input}
                                                   placeholder={'enter USERNAME'}
                                                   onChangeText={text => {
                                                       this.setState({uName: text})
                                                   }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rbox}>
                                <View style={styles.iBox}>
                                    <Image source={{uri: 'email'}} style={styles.imgBox}/>
                                </View>
                                <View style={styles.cBox}>
                                    <TextInput style={styles.input}
                                               placeholder={'enter EMAIL'}
                                               onChangeText={text => {
                                                   this.setState({email: text})
                                               }}
                                    />

                                </View>
                            </View>
                            <View style={styles.rbox}>
                                <View style={styles.iBox}>
                                    <Image source={{uri: 'password'}} style={styles.imgBox}/>
                                </View>
                                <View style={styles.cBox}>
                                    <TextInput style={styles.input}
                                               secureTextEntry={true}
                                               placeholder={'enter PASSWORD'}
                                               onChangeText={text => {
                                                   this.setState({password: text})
                                               }}
                                    />
                                </View>
                            </View>
                            <View style={styles.rbox}>
                                <View style={styles.iBox}>
                                    <Image source={{uri: 'rePass'}} style={styles.imgBox}/>
                                </View>
                                <View style={styles.cBox}>
                                    <TextInput style={styles.input}
                                               secureTextEntry={true}
                                               placeholder={'Please,ReEnter PASSWORD'}
                                               onChangeText={text => {
                                                   this.setState({rePass: text})
                                               }}
                                    />

                                </View>
                            </View>
                            <View style={styles.rbox}>
                                <View style={styles.iBox}>
                                    <Image source={{uri: 'phoneNo'}} style={styles.imgBox}/>
                                </View>
                                <View style={styles.cBox}>
                                    <TextInput style={styles.input}
                                               placeholder={'enter phoneNo'}
                                               onChangeText={text => {
                                                   this.setState({phoneNo: text})
                                               }}
                                    />
                                </View>
                            </View>


                            <View >
                                <TouchableOpacity style={styles.rbox} onPress={this.DatePicker.bind(this)}>

                                <View style={styles.iBox}>

                                        <Image source={{uri: 'dob'}} style={styles.imgBox}/>

                                </View>

                                {/*<View style={styles.cBox}>*/}

                                <View style={styles.cBox}>
                                    <TextInput style={styles.input}
                                               placeholder={'Select DateofBirth'}
                                               editable={false}
                                               value={this.state.dob}
                                    />
                                </View>
                                </TouchableOpacity>
                                <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePicked.bind(this)} />
                             </View>

                            <View style={styles.regButton}>
                                <TouchableOpacity onPress={this.onRegClick}>
                                    <Text style={styles.boldTxt}>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.txtStyle}>
                                <Text>
                                    Already Member?
                                </Text>
                                <TouchableOpacity onPress={this.onLoginClick}>
                                    <Text style={styles.boldTxt}>Login</Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                    </View>
                </ImageBackground>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        height: Constant.fullScreenHeight,
        width: Constant.screenWidth,
        paddingTop: Constant.isIOS ? 10 : 0,
    },
    subContent: {
        margin: wp('10%'),
        flex: 1,

        // backgroundColor: 'blue',
    },
    shopIcon: {
        height: hp('5%'),
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgstyle: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
    },
    dataContainer: {
        flex: 1,
        flexDirection: 'column',
        height: hp('95%'),
        // backgroundColor: 'pink',
        alignItems: 'stretch',
        //justifyContent: 'center',
    },
    uinfo: {
        //backgroundColor: 'yellow',
        height: hp(8),
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,

    },
    nbox: {
        //backgroundColor: 'blue',
        height: hp(8),
        //marginTop: 10,
        flexDirection: 'row',

    },
    nsBox: {
        width: wp(39.5),
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    rbox: {
        //backgroundColor: 'blue',
        height: hp(8),
        //marginTop: 10,
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    hbox: {
        //backgroundColor: 'blue',
        height: hp(8),
        //marginTop: 10,
        flexDirection: 'row',

    },
    iBox: {
        width: wp(15),
        //  backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cBox: {
        //flexDirection: 'column',
        justifyContent: 'center',
        width: wp(65),
        //backgroundColor: 'white',
    },
    input: {
        fontSize: 18,
        height: 100,
        margin: 10,
        //fontColor:'black',
    },
    header: {
        fontSize: 18,
        height: 100,
        //backgroundColor:'red',
        width: wp(39.5)
        //fontColor:'black',
    },
    imgBox: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    fpass: {
        height: hp('5'),
        padding: 5,
        alignItems: 'flex-end'
    },
    regButton: {
        height: wp('15'),
        backgroundColor: '#F21541',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
    },
    txtStyle: {
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boldTxt: {
        fontWeight: 'bold',
        fontSize: 18,
    }

})