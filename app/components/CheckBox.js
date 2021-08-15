import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';

export default function CheckBox({onPress, isChecked}) {
  //const [isChecked, setIsChecked] = useState(selected);
  return (
    <Pressable
      onPress={() => onPress &&onPress()}
      style={[
        {
          borderRadius: scale(15),
          borderColor: appColors.white,
          height: scale(25),
          width: scale(25),
        },
        isChecked ? styles.checked : styles.unChecked,
      ]}></Pressable>
  );
}

const styles = StyleSheet.create({
  checked: {
    borderWidth: scale(5),
    backgroundColor: appColors.primary,
    borderColor: appColors.white,
  },
  unChecked: {
    backgroundColor: appColors.gray,
  },
});
