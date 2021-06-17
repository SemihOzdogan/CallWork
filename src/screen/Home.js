import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, TextInput } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import AsyncStorage from '@react-native-async-storage/async-storage';

let token;
calling = async (no) => {
    console.log(no)
    RNImmediatePhoneCall.immediatePhoneCall(no);
}
function Home() {
    const [callNo, setCallNo] = useState('05448355136')
    useEffect(async () => {
        console.log('1')
        token = await AsyncStorage.getItem('@Token')
        console.log(token)
    });
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('../image/call_me.gif')}
            />
            <Text>ARAMA YAPILIYOR...</Text>
            <TextInput keyboardType="phone-pad" style={{ backgroundColor: '#ccc', borderRadius: 4, margin: 10 }} placeholder="Aramak istediğiniz numarayı giriniz" value={callNo} onChangeText={val => setCallNo(val)} />
            <Button title="Arama yap" onPress={() => calling(callNo)} />
        </View>
    )
}
export default Home;
