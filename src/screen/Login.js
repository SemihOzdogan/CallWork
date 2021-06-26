import React, { useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Input from '../components/Input';
import Title from '../components/Title';
import Button from '../components/Button';
import { usernameChange, passwordChange } from '../redux/actions/index';
import { connect } from 'react-redux';

function Login(props) {
    let URL = 'http://api8test.netvar.ga/login'
    /*States */
    const [loading, setLoading] = useState(false)
    /*Login Request API */
    LoginRequest = async (props, username, password) => {
        setLoading(true)
        var userInfo = {
            username: username,
            password: password,
        }
        console.log(URL, userInfo)
        if (userInfo.username == '' || userInfo.password == '') {
            Toast.show({
                type: 'error',
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                text1: 'Uyarı',
                text2: 'Kullanıcı adı ve şifre alanı boş bırakılamaz'
            });
        }
        else {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then((response) => response.json())
                .then((response => {
                    if (response.status == true) {
                        AsyncStorage.setItem('@Token', response.data.token.access_token)
                        props.navigation.navigate('Home')
                    }
                    else {
                        Toast.show({
                            type:'info',
                            position: 'bottom',
                            visibilityTime: 4000,
                            autoHide: true,
                            topOffset: 30,
                            bottomOffset: 40,
                            text1: 'Uyarı',
                            text2: response.message
                        });
                    }
                    setLoading(false)
                }))
        }
    }

    /*Render */
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <Title />
            <Input
                keyboardType="default"
                placeholder="Username"
                value={props.username}
                onChangeText={username => props.usernameChange(username)}
            />
            <Input
                keyboardType="default"
                placeholder="Password"
                value={props.password}
                onChangeText={password => props.passwordChange(password)}
            />
            <Button
                onPress={() => LoginRequest(props, props.username, props.password)}
                changed={loading}
            />
        </View >
    )
}

const mapStateToProps = ({ loginReducersResponse }) => {
    const { username, password } = loginReducersResponse
    return {
        username,
        password,
    }
}
export default connect(mapStateToProps, { usernameChange, passwordChange })(Login);
