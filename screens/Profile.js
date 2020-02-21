import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  //MaterialCommunityIcons

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            phone: ''
        }

        Icon.loadFont();
        iconColor = '#808689';
    }

    onClickListener = (viewId) => {

        const myObj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone
        };

        const myObjStr = JSON.stringify(myObj);

        console.log('user', myObjStr);

        this.storeData(myObjStr)
    }

    storeData = async (myObjStr) => {
        try {
            await AsyncStorage.setItem('user', myObjStr)
        } catch (e) {
            // saving error
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} /> */}
                    <View style={styles.inputIcon}>
                        <Icon name="account" color={this.iconColor} size={20} />
                    </View>
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        keyboardType="name-phone-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(name) => this.setState({ name })} />
                </View>


                <View style={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <Icon name="cellphone-basic" color={this.iconColor} size={20} />
                    </View>
                    <TextInput style={styles.inputs}
                        placeholder="Phone"
                        keyboardType="phone-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(phone) => this.setState({ phone })} />
                </View>


                <View style={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <Icon name="email" color={this.iconColor} size={20} />
                    </View>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <Icon name="textbox-password" color={this.iconColor} size={20} />
                    </View>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableHighlight>

                {/* <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                    <Text>Register</Text>
                </TouchableHighlight> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
