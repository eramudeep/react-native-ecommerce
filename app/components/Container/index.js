import React from 'react'
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native'
import { scale } from 'react-native-size-matters'

export default function Container({children,isScrollable}) {
    return (
        <SafeAreaView style={styles.container}>
            {
                isScrollable? <ScrollView>
                    <View style={styles.innerView}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={styles.innerView}>{children}</View>
            }
        </SafeAreaView>
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
