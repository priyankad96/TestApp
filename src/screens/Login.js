import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Constant from '../helper/constant';

export default class Login extends Component {
    onRegisterClick = () => {
        debugger;
        this.props.navigation.navigate('Register');
    }

    render() {
        debugger;
        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={{uri: 'imgBackground'}} style={styles.imgContainer}>
                    <View style={styles.subContent}>
                        <View style={styles.shopIcon}>
                            <Image source={{uri: 'shopIcon'}} style={styles.imgstyle}/>
                        </View>
                        <View style={styles.dataContainer}>
                            <View style={styles.uname}>
                                <View style={styles.iBox}>
                                    <Image source={{uri: 'user'}} style={styles.imgBox}/>
                                </View>
                                <View style={styles.cBox}>

                                    <View>
                                        <TextInput style={styles.input}
                                                   placeholder={'enter USERNAME'}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.pward}>
                                <View style={styles.iBox}>
                                    <Image source={{uri: 'password'}} style={styles.imgBox}/>
                                </View>
                                <View style={styles.cBox}>
                                    <TextInput style={styles.input}
                                               secureTextEntry={true}
                                               placeholder={'enter PASSWORD'}/>
                                </View>
                            </View>
                            <View style={styles.fpass}>
                                <TouchableOpacity><Text style={styles.boldTxt}>Forgot
                                    Password?</Text></TouchableOpacity>
                            </View>

                            <View style={styles.loginButton}>
                                <TouchableOpacity>
                                    <Text style={styles.boldTxt}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.txtStyle}>
                                <Text>
                                    Don't have an Account?
                                </Text>
                                <TouchableOpacity onPress={this.onRegisterClick}>
                                    <Text style={styles.boldTxt}>Register</Text>
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
        height: hp('30%'),
        //backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgstyle: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
    },
    dataContainer: {
        flex: 1,
        flexDirection: 'column',
        height: hp('70%'),
        // backgroundColor: 'pink',
        alignItems: 'stretch',
        //justifyContent: 'center',
    },
    uname: {
        //backgroundColor: 'yellow',
        height: hp(12),
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,

    },
    pward: {
        //backgroundColor: 'blue',
        height: hp(12),
       // marginTop: 10,
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    iBox: {
        width: wp(15),
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: wp(65),
        // backgroundColor: 'white',


    },
    input: {
        fontSize: 18,
        height: 100,
        margin: 10,
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
    loginButton: {
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