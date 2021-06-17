import React from 'react';
import { Dimensions, TouchableOpacity, Text, ActivityIndicator } from "react-native";

const { width, height } = Dimensions.get('window')

export default Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ backgroundColor: '#ddd', width: width / 4, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 6, margin: 10 }}>
            {
                props.changed ? <ActivityIndicator color="gray" /> : <Text>Giriş Yap</Text>
            }
        </TouchableOpacity>
    )
}