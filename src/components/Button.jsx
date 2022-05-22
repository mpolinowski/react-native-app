import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.buttonPress}>
            <Text>Click Me!</Text>
        </TouchableOpacity>
    )
}

export default Button