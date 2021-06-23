import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Begin(props) {
    useEffect(async () => {
        console.log('1')
        token = await AsyncStorage.getItem('@Token')
        if (token != null) {
            console.log('2', token)
            setTimeout(() => {
                props.navigation.navigate('Home')
            }, 3000);
        }
        else {
            console.log('3', token)
            setTimeout(() => {
                props.navigation.navigate('Login')
            }, 3000);
        }
    });
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="gray" size="large" />
    </View>
}
export default Begin;
