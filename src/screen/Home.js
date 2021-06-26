import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, TextInput } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { callNumberChange } from '../redux/actions/index';
import { connect } from 'react-redux';
import Input from '../components/Input';

let token;
calling = (no) => {
    console.log(no)
    RNImmediatePhoneCall.immediatePhoneCall(no);
}

function Home(props) {
    // const [callNo, setCallNo] = useState('05448355136')
    useEffect(async () => {
        token = await AsyncStorage.getItem('@Token')
        calling(props.number)
        console.log(token)
    });
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('../image/call_me.gif')}
            />
            <Text>ARAMA YAPILIYOR...</Text>
            <Input
                keyboardType="phone-pad"
                placeholder="Aramak istediğiniz numarayı giriniz"
                value={props.number}
                onChangeText={number => props.passwordChange(number)}
            />
            <Button title="Arama yap" onPress={() => calling(props.number)} />
        </View>
    )
}
const mapStateToProps = ({ callReducersResponse }) => {
    const { number } = callReducersResponse
    return {
        number,
    }
}
export default connect(mapStateToProps, { callNumberChange })(Home);

