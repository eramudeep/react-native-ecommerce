import React from 'react';
import {View, Text,FlatList,Pressable} from 'react-native';
import { scale } from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import ProductCard from '../../components/ProductCard';
import TitleComp from '../../components/TitleComp';
import { bestSellersList } from '../../utils/MockData';
import Feather from 'react-native-vector-icons/Feather'; 
import { appColors } from '../../utils/appColors';
export default function index({navigation, route:{params}}) {
   
  const _renderHeader = () => {
    return (
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:scale(20)}}>
         <Pressable onPress={()=> navigation.goBack()}>
            <Feather name="chevron-left" size={scale(25)} />
         </Pressable>
        
        <Label text={params.item.label} style={{fontWeight:"500" , fontSize:scale(22)}} /> 
        
        <View style={{height:scale(45), width:scale(45), backgroundColor:appColors.primary, justifyContent:'center', alignItems:'center', borderRadius:scale(25)}}>
        <Feather name="search" size={scale(20)} color={appColors.white} />
        </View>
      </View>
    );
  };
  return (
    <Container>
      {_renderHeader()}
      <View style={{paddingVertical:scale(30)}}>
      <TitleComp heading={"Top Brands"} />
      </View>
        <View>
        <FlatList numColumns={2} data={bestSellersList} renderItem={({item,index})=><ProductCard key={index} navigation={navigation}  item={{...item,isNew: index < 1}}/> } />
        </View>
    </Container>
  );
}
