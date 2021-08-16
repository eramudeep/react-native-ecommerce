import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '../utils/appColors';
import Label from './Label';
import {useNavigation} from '@react-navigation/native';
export default function ScreenHeader({backIcon, rightIcon, label, showSearch}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: scale(20),
      }}>
      <Pressable onPress={() => navigation.goBack()} style={{}}>
        <Feather name={backIcon ? backIcon : 'chevron-left'} size={scale(25)} />
      </Pressable>

      <Label text={label} style={{fontWeight: '500', fontSize: scale(21)}} />

      {showSearch && (
        <View
          style={{
            height: scale(45),
            width: scale(45),
            backgroundColor: appColors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(25),
          }}>
          <Feather
            name={rightIcon ? rightIcon : 'search'}
            size={scale(20)}
            color={appColors.white}
          />
        </View>
      )}
      {!showSearch && <View />}
    </View>
  );
}
