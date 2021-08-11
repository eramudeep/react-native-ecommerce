import React from 'react'
import { View, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../utils/appColors'
import CustomButton from '../components/CustomButton'
import Label from './Label'
export default function BottomButtons({buttonLabel,price,onPress}) {
    return (
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          bottom: scale(15),
          paddingHorizontal: scale(20),
          backgroundColor: appColors.white,
        }}>
        <View>
          <Label
            text="PRICE"
            style={{
              fontSize: scale(14),
              opacity: scale(0.4),
              letterSpacing: scale(2),
            }}
          />
          <Label
            text={price}
            style={{
              fontSize: scale(18),
              fontWeight: '800',
              color: appColors.primary,
              marginTop: scale(7),
            }}
          />
        </View>
        <CustomButton onPress={onPress&&onPress} label={buttonLabel} />
      </View>
    )
}
