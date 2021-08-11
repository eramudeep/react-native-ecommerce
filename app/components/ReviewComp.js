import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {appColors} from '../utils/appColors';
import Label from './Label';
import {reviews} from '../utils/MockData';

export default function ReviewComp() {
  const ReviewCard = ({item}) => {
    const {name, count, detail, image} = item;
    return (
      <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
        <Image style={styles.imgC} source={image} />

        <View style={{flex: 1}}>
          <View style={styles.labelNStarC}>
            <Label
              text={name}
              style={{fontSize: scale(16), fontWeight: '600'}}
            />
            <AirbnbRating
              size={15}
              count={count}
              defaultRating={count}
              isDisabled
              showRating={false}
              selectedColor={appColors.yellow}
              //style={{paddingVertical: 10,  }}
            />
          </View>
          <Text style={{flexWrap: 'wrap'}}>{detail}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
      renderItem={({item, index}) => <ReviewCard key={index} item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  imgC: {
    borderRadius: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: scale(55),
    width: scale(55),
    marginRight: scale(20),
  },
  labelNStarC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(10),
  },
});
