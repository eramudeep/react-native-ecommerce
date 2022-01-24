import React from 'react';
import {View, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import ScreenHeader from '../../components/ScreenHeader';
import SelectAble from '../../components/SelectAble';
import Divider from '../../components/Divider';
import CustomButton from '../../components/CustomButton';
import ProductCard from '../../components/ProductCard';
import {bestSellersList} from '../../utils/MockData';
import TitleComp from '../../components/TitleComp';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '../../components/CheckBox';
import Label from '../../components/Label';
import {AlertHelper} from '../../utils/AlertHelper';
import paymentHelper from '../../services/paymentHelper';
import ReduxWrapper from '../../utils/ReduxWrapper';
 

function index(props) { 
  const {auth: {user}, navigation} = props
  console.log({user});

  const onPaymentDone = (info) => {
    const {error} = info;
    if (!error) {
      AlertHelper.show('success', 'Your Order Placed Successfully');
      navigation.navigate('Home');
    } else {
      AlertHelper.show('error', 'Oops !! Something went wrong !');
    }
  };
  const onPay = async () => {
    const {email, name} = user;
    await paymentHelper(
      {
        description: 'Order at Amusoftech-Shop',
        currency: 'INR',
        amount: '5000',
        name: 'foo',
        prefill: {
          email: email,
          contact: '9464145008',
          name: name,
        },
      },
      onPaymentDone,
    );
  };
  return (
    <>
      <Container isScrollable>
        <ScreenHeader label="Summary" navigation={navigation} />

        <View style={{}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
            horizontal
            data={bestSellersList}
            renderItem={({item, index}) => (
              <ProductCard key={index} item={item} />
            )}
          />
        </View>
        <SelectAble
          item={{
            label: 'Shipping Address',
            subLabel:
              '21, Alex Davidson Avenue, Opposite Omegatron, Vicent Smith Quarters, Victoria Island, Lagos, Nigeria',
          }}
          selected
        />
        <Divider isDark />
        <View style={{paddingVertical: scale(20)}}>
          <TitleComp heading="Payment" />
          <View
            style={{
              paddingVertical: scale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Feather name="credit-card" size={scale(25)} />
            <View style={{}}>
              <Label
                text="Master Card"
                style={{fontSize: scale(13), opacity: scale(0.5)}}
              />
              <Label text="**** **** **** 1234" style={{fontSize: scale(17)}} />
            </View>
            <CheckBox isChecked />
          </View>
        </View>
        {/* <SelectAble
          item={{
            label: 'Shipping Address',
            subLabel:
              '21, Alex Davidson Avenue, Opposite Omegatron, Vicent Smith Quarters, Victoria Island, Lagos, Nigeria',
          }}
          selected
        /> */}
        <Divider isDark />
      </Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: scale(20),
          bottom: scale(10),
        }}>
        <CustomButton
          onPress={() => navigation.goBack()}
          label="back"
          unFilled
        />
        <CustomButton onPress={onPay} label="Pay" />
      </View>
    </>
  );
}

export default ReduxWrapper(index);
