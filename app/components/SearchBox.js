import React from 'react';
import {View, Pressable, TextInput} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';
export default function SearchBox() {
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
      <View
        style={{
          paddingHorizontal: scale(20),
          borderRadius: scale(20),
          alignItems: 'center',
          backgroundColor: appColors.lightGray,
          width: '82%',
          flexDirection: 'row',
        }}>
        <Feather name="search" size={scale(20)} color={appColors.black} />
        <TextInput style={{flex: 1, paddingLeft: scale(10)}} />
      </View>
      <Pressable
        style={{
          borderRadius: scale(20),
          width: scale(40),
          height: scale(40),
          backgroundColor: appColors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Feather name="camera" size={scale(18)} color={appColors.white} />
      </Pressable>
    </View>
  );
}
