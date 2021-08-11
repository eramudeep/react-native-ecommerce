import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'

export default function Label({text,style}) {
    return (
    <Text style={[styles.label,style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:scale(16),
        color:appColors.black,
        
    }
})
