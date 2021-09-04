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

function index({cartItems ,navigation}) {
  const ItemCard = ({item}) => {
    const {name, description, price, image} = item;
    return ( <CheckOutItem name={name} image={image} price={price} /> );
  };
  return (
    <>
      <Container>
        <View style={{flex: 1, paddingVertical: scale(30)}}>
          <SwipeListView
            keyExtractor={(item) => `${item.name}_${new Date().getTime()}`}
            ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
            data={[...cartItems]  || []}
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
                  style={{
                    left: scale(-15),
                    flex: scale(0.3),
                    backgroundColor: appColors.yellow,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Feather
                    name={'star'}
                    size={scale(25)}
                    color={appColors.white}
                  />
                </Pressable>
                <Pressable
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
        <BottomButtons onPress={()=> navigation.navigate("Checkout") } buttonLabel={'CHECKOUT'} price={'$4500'} />
      </View>
    </>
  );
}

const mapStateToProps = (state) => ({
  cartItems : state.cart.cartItems
});
const mapDispatchToProps = { 
};

export default connect(mapStateToProps, mapDispatchToProps)(index);