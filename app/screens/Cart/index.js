import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import {appColors} from '../../utils/appColors';
import {SimpleStepper} from 'react-native-simple-stepper';
import {bestSellersList} from '../../utils/MockData';
import BottomButtons from '../../components/BottomButtons';
import {SwipeListView} from 'react-native-swipe-list-view';
import Feather from 'react-native-vector-icons/Feather';
import CheckOutItem from '../../components/CheckOutItem';
import {connect} from 'react-redux';
import ReduxWrapper from '../../utils/ReduxWrapper';
import { APP_CURRENY } from '../../utils/appConfig';
import Empty from '../../components/Empty';

function index({wishList:{wishItemNames},removeToWishList$, addToWishList$,removeFromCart$,cart:{cartItems} ,navigation}) {

 const getAmount = ()=>{
   let amount =0
   cartItems?.map(item=>{
     const {price} =item
     amount+= Number( price );
   })
   return  `${APP_CURRENY.symbol} ${amount}`
    
 }
 const onDeletePress = (item)=>{ 
  removeFromCart$(item?.name)
 }
 const isInWishList = (item)=>{
  return wishItemNames?.includes( item?.name)
 }
 const onAddToWishListPress = (item)=>{ 
   if(!isInWishList(item) ){
    addToWishList$(item)
   }else{
    removeToWishList$(item?.name)
   }
    
 }
 

  const ItemCard = ({item}) => {
    const {title, description, price, image} = item;
    return ( <CheckOutItem name={title} image={image} price={price} /> );
  };
  return (
    <>
      <Container >
        <View style={{flex: 1, paddingVertical: scale(30)}}>
          <SwipeListView
          ListEmptyComponent={()=> <Empty  label={"Your Cart is empty"}/> }
          showsVerticalScrollIndicator={false}
            keyExtractor={(item) => `${item.name}_${new Date().getTime()}`}
            ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
            data={cartItems || []}
            renderItem={({item, index}) => <ItemCard item={item} />}
            renderHiddenItem={(data, rowMap) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Pressable
                  onPress={()=>onAddToWishListPress(data?.item)}
                  style={{
                    left: scale(-15),
                    flex: scale(0.3),
                    backgroundColor: appColors.yellow,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Feather
                    name={'star' }
                    size={scale(25)}
                    color={isInWishList(data?.item) ? appColors.primary :  appColors.white}
                  />
                </Pressable>
                <Pressable
                onPress={()=>onDeletePress(data?.item)}
                  style={{
                    left: scale(15),
                    flex: scale(0.3),
                    backgroundColor: appColors.redOrange,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Feather
                    name={'trash'}
                    size={scale(25)}
                    color={appColors.white}
                  />
                </Pressable>
              </View>
            )}
            leftOpenValue={scale(85)}
            rightOpenValue={scale(-85)}
          />
        </View> 
      </Container>
      <View style={{backgroundColor: 'red', bottom: scale(-15)}}>
        <BottomButtons onPress={()=> navigation.navigate("Checkout") } buttonLabel={'CHECKOUT'} price={getAmount()} />
      </View>
    </>
  );
}
/* 
const mapStateToProps = (state) => ({
  cartItems : state.cart.cartItems
});
const mapDispatchToProps = { 
};

export default connect(mapStateToProps, mapDispatchToProps)(index); */
export default ReduxWrapper(index)