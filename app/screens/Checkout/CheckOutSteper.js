import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Container from '../../components/Container';
import Stepper from 'react-native-stepper-ui';
import CheckoutDelivery from './CheckoutDelivery';
import {appColors} from '../../utils/appColors';
import CustomButton from '../../components/CustomButton';
import {scale} from 'react-native-size-matters';
import ScreenHeader from '../../components/ScreenHeader';
import CheckoutAddress from './CheckoutAddress';
import CheckoutPayment from './CheckoutPayment';

const {height} = Dimensions.get('window');

export default function CheckOutSteper({navigation}) {
  const [active, setActive] = useState(0);

  const onFinish = () => {
    navigation.navigate("Summary")
     //Summary
  };
  return (
    <Container>
      <ScreenHeader label="Checkout" navigation={navigation} />

      <Stepper
        stepStyle={styles.stepStyle}
        active={active}
        onFinish={onFinish}
        content={[
          <CheckoutDelivery />,
          <CheckoutAddress />,
          <CheckoutPayment />,
        ]}
        //showButton={false}
        onNext={() => setActive((p) => p + 1)}
        onBack={() => setActive((p) => p - 1)}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        wrapperStyle={styles.wrapperStyle}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  stepStyle: {
    backgroundColor: appColors.primary,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  buttonTextStyle: {
    fontSize: scale(16),
    fontWeight: '300',
    color: appColors.white,
    letterSpacing: scale(2),
    textTransform: 'uppercase',
  },
  buttonStyle: {
    /*  padding: 10,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginRight: 10,
    backgroundColor: appColors.primary, */
    //top: scale(height / 9),
    height: scale(50),
    backgroundColor: appColors.primary,
    borderRadius: scale(5),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: scale(10),
    paddingHorizontal: scale(50),
    //position:'absolute',
    bottom: scale( -30)
    

  },
  wrapperStyle: {},
});
