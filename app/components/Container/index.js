import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'

export default function Container({children,isScrollable}) {
    return (
        <View style={styles.container}>
            {
                isScrollable? <ScrollView>
                    <View style={styles.innerView}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={styles.innerView}>{children}</View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    innerView:{
        flex:1,
        paddingHorizontal:scale(20)
    }
})
