import React from 'react';
import {View, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';
import Label from './Label';

export default function Badge({label}) {
  return (
    <View
      style={{
        margin: scale(5),
        paddingHorizontal: scale(20),
        height: scale(40),
        backgroundColor: appColors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(20),
      }}>
      <Label text={label ? label : 'Label'} style={{color: appColors.black}} />
    </View>
  );
}
