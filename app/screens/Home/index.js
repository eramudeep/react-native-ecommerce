import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {} from 'react-native-gesture-handler';
import {
  features,
  starterIntro,
  categoriesList,
  bestSellersList,
} from '../../utils/MockData';
import {appColors, shadow} from '../../utils/appColors';
import TouchableRipple from 'react-native-touch-ripple';
import Label from '../../components/Label';
import Container from '../../components/Container';

import {scale} from 'react-native-size-matters';
import SearchBox from '../../components/SearchBox';

export default function Home() {
  const RenderTitle = ({heading, rightLabel}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Label
          text={heading}
          style={{fontSize: scale(20), fontWeight: '600'}}
        />
        <Label text={rightLabel} style={{fontSize: scale(14)}} />
      </View>
    );
  };
  const ProductCard = ({item}) => {
    const {name, description, price, image} = item;
    return (
      <View style={{}}>
        <View
          style={{
            height: scale(200),
            width: scale(150),
            //backgroundColor:appColors.lightGray
          }}>
          <Image source={image} />
        </View>
        <View style={{paddingVertical: scale(3)}}>
          <Label text={name} style={{fontSize: scale(18), fontWeight: '500'}} />
        </View>

        <View style={{paddingVertical: scale(2)}}>
          <Label
            text={description}
            style={{fontSize: scale(13), color: appColors.darkGray}}
          />
        </View>

        <View style={{paddingVertical: scale(5)}}>
          <Label
            text={price}
            style={{
              fontSize: scale(18),
              color: appColors.primary,
              fontWeight: '500',
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <Container isScrollable style={styles.container}>
      <SearchBox />
      <View style={{paddingVertical: scale(30)}}>
        <RenderTitle heading="Categories" />
        <FlatList
          style={{marginTop: scale(40)}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoriesList}
          ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
          renderItem={({item, index}) => {
            const {label, Icon} = item;
            return (
              <View key={index} style={{alignItems: 'center'}}>
                <TouchableRipple
                  rippleColor={appColors.primary}
                  rippleContainerBorderRadius={scale(40)}
                  rippleDuration={800}
                  style={{
                    ...shadow,
                    backgroundColor: appColors.white,
                    height: scale(70),
                    width: scale(70),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: scale(40),
                  }}>
                  <Icon />
                </TouchableRipple>
                <View style={{marginTop: scale(15)}}>
                  <Label text={label} style={{fontSize: scale(14)}} />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <View style={{paddingVertical: scale(25)}}>
          <RenderTitle heading="Best Selling" rightLabel="See All" />
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
          horizontal
          data={bestSellersList}
          renderItem={({item, index}) => <ProductCard item={item} />}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
