import React from 'react'
import { View, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import Label from './Label'

export default function TitleComp({heading, rightLabel}) {
    return (
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Label
          text={heading}
          style={{fontSize: scale(20), fontWeight: '600'}}
        />
        <Label text={rightLabel} style={{fontSize: scale(14)}} />
      </View>
    )
}
