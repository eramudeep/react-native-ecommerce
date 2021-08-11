import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Container from '../../components/Container';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {scale} from 'react-native-size-matters';
import Label from '../../components/Label';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {appColors} from '../../utils/appColors';
import StarRating from 'react-native-star-rating';
import Feather from 'react-native-vector-icons/Feather';
export default function index({navigation,route:{params}}) {
    const {title}  =params
  const [activeCount, setActiveCount] = useState(3);
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: scale(40),
        }}>
        <Pressable onPress={() => navigation.goBack()} style={{left: -105}}>
          <Feather
            name={'chevron-down'}
            size={scale(25)}
            color={appColors.black}
          />
        </Pressable>
        <Label
          text="Write Review"
          style={{fontWeight: '500', fontSize: scale(18)}}
        />
      </View>

      <View style={{paddingVertical: scale(20)}}>
        <Label
          text={title}
          style={{fontWeight: '800', fontSize: scale(28)}}
        />
      </View>

      <View style={{paddingVertical: scale(20), width: '80%'}}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={activeCount}
          selectedStar={(rating) => setActiveCount(rating)}
          fullStarColor={appColors.yellow}
          emptyStarColor={appColors.lightGray}
        />
      </View>

      <View style={{paddingVertical: scale(20)}}>
        <CustomInput
          containerStyle={{backgroundColor: 'transparent'}}
          placeholder="Tell us your experience"
          InputStyle={{fontSize: scale(18)}}
        />
      </View>

      <View style={{paddingVertical: scale(20), alignItems: 'flex-end'}}>
        <View style={{flex: 0.5, width: '50%'}}>
          <CustomButton label="SEND" />
        </View>
      </View>
    </Container>
  );
}
