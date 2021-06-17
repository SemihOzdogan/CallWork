import React from 'react';
import { TextInput, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

export default Input = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            style={{ backgroundColor: '#ddd', borderRadius: 6, width: width - 50, margin: 10 }}
            value={props.value}
            onChangeText={props.onChangeText}
        />
    )
}