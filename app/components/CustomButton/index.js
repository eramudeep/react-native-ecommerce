import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'

export default function index({unFilled, label,style,onPress,labelStyle}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,unFilled ?  styles.unFilled :{}, style]}>
            <Text style={[styles.label,unFilled ? styles.unFilledLabel : {}, labelStyle]}>{`${label}`.toUpperCase()}</Text>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        backgroundColor:appColors.primary,
        borderRadius:scale(5),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10)
    },
    label:{
        fontSize:scale(16),
        fontWeight:"500",
        color:appColors.white,
        letterSpacing:scale( 2)
           
    },
    unFilled:{
        backgroundColor:"transparent",
        borderWidth:scale(0.7),
        borderColor:appColors.primary
    },
    unFilledLabel:{
        color:appColors.black,
    }
})
