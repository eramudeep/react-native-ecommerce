import React from 'react';
import {View, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import CheckBox from '../../components/CheckBox';
import Label from '../../components/Label'; 
import CustomInput from '../../components/CustomInput';
export default function CheckoutAddress() {
  return (
    <View style={{paddingVertical: scale(30)}}>
      <View style={{flex:1,  flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
        <CheckBox isChecked={true} /> 
        <View style={{paddingLeft:scale(10)}}>
        <Label text="Billing address is the same as delivery address" style={{fontSize:scale(15)}} />
        </View>
      </View>

      <View style={{paddingVertical: scale(10)}}>
           <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="21, Alex Davidson Avenue" label="Street 1"   />
      </View>
      <View style={{paddingVertical: scale(10)}}>
           <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="Opposite Omegatron, Vicent Quarters" label="Street 2"   />
      </View>

      <View style={{paddingVertical: scale(10)}}>
           <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="Victoria Island" label="City"   />
      </View>

      <View style={{paddingVertical: scale(10)}}>
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
           <CustomInput containerStyle={{backgroundColor: 'transparent'  }} value="Punjab" label="State"   />
           <CustomInput containerStyle={{backgroundColor: 'transparent'  }} value="India" label="Country"   />
           </View>
      </View>
    </View>
  );
}
