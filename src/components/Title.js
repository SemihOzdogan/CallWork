import React from 'react';
import { Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

export default Title = () => {
    return (
        <Text style={{ backgroundColor: '#ddd', width: width - 50, textAlign: 'center', padding: 10, borderRadius: 6, margin: 10 }}>Login</Text>
    )
}