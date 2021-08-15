import React,{useState} from 'react';
import {View, Text,FlatList,Pressable} from 'react-native';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import { appColors } from '../../utils/appColors';
import { paymentMethods } from '../../utils/MockData';
import CustomInput from '../../components/CustomInput';
import CheckBox from '../../components/CheckBox';
import Label from '../../components/Label';
import { color } from 'react-native-reanimated';
export default function CheckoutPayment() {
    const [selectedMethod, setSelectedMethod] = useState("credit-card")
  const SquareCard = ({item}) => {
    return (
      <Pressable onPress={()=> setSelectedMethod(item)} style={{width:scale(100),height:scale(80), backgroundColor: selectedMethod=== item ? appColors.primary : appColors.white, borderRadius:scale(5), justifyContent:'center', alignItems:'center'}}>
        <Feather name={ item} size={scale(25)} color={selectedMethod=== item  ?appColors.white : appColors.gray } />
      </Pressable>
    );
  };
  return (
    <View style={{paddingVertical:scale(50)}}>
      <View style={{flexDirection: 'row'}}>
          <FlatList   showsHorizontalScrollIndicator={false} ItemSeparatorComponent={()=> <View style={{padding:scale(5)}} /> } horizontal data={paymentMethods}  renderItem={({item,index})=> <SquareCard  item={item}/>} /> 
       
      </View>
      <View style={{paddingVertical: scale(10)}}>
           <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="Amusoftech" label="Name on card"   />
      </View>
      <View style={{paddingVertical: scale(10)}}>
           <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="4560   5674   3224   4543" label="Name on card"  IconRight={()=> <Feather name="credit-card"  color={appColors.primary} size={scale(20) }/> }  />
      </View>

      <View style={{paddingVertical: scale(10)}}>
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
           <CustomInput containerStyle={{backgroundColor: 'transparent'  }} value="09/18" label="Expiry Date"   />
           <CustomInput containerStyle={{backgroundColor: 'transparent'  }} value="420" label="CVV"   />
           </View>
      </View>

      <View style={{paddingVertical: scale(10),flex:1,  flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
        <CheckBox isChecked={true} /> 
        <View style={{paddingLeft:scale(10)}}>
        <Label text="Save this card details" style={{fontSize:scale(15)}} />
        </View> 
      </View>

    </View>
  );
}
