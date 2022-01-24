import React from 'react';
import {View, Text, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../utils/appColors';
import Label from './Label';
import {SimpleStepper} from 'react-native-simple-stepper';

export default function CheckOutItem({ renderBagge, hideSteper,noBg, image, name, price}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor:  noBg ?  'transparent':   appColors.lightGray,
        //borderRadius: scale(  5 )
      }}>
      <Image
        style={{
          height: scale(130),
          width: scale(130),
           borderRadius:  scale(noBg ? 5 : 0),
          //backgroundColor:appColors.darkGray
        }}
        source={{uri:image} }
      />

      <View
        style={{
          marginLeft: scale(10),
          justifyContent: 'space-between',
          paddingVertical: scale(10),
        }}>
        <Label text={name?.substring(0,20)} style={{fontWeight: '600' ,}} />
        <Label
          text={price}
          style={{
            fontSize: scale(18),
            fontWeight: '500',
            color: appColors.primary,
          }}
        />
        {!hideSteper&& <SimpleStepper
          containerStyle={{
            backgroundColor: appColors.lightGray,
            flexDirection: 'row',
            borderRadius: scale(5),
            overflow: 'hidden',
            alignItems: 'center',
            paddingHorizontal: scale(20),
            height: scale(35), 
          }}
          incrementStepStyle={{padding: scale(10), opacity: scale(0.4)}}
          decrementStepStyle={{padding: scale(10), opacity: scale(0.4)}}
          incrementImageStyle={{height: scale(20), width: scale(20)}}
          decrementImageStyle={{height: scale(20), width: scale(20)}}
          showText
          renderText={() => <Label text="1" />}
          separatorStyle={{}} 
        />}
        {renderBagge&&renderBagge()}
      </View>
    </View>
  );
}
