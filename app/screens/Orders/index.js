import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import ScreenHeader from '../../components/ScreenHeader';
import {appColors, shadow} from '../../utils/appColors';
import {orderList} from '../../utils/MockData';

export default function index({navigation}) {
  const OrderCard = ({item}) => {
    const {label, amount, status, color} = item;
    return (
      <View style={styles.contentContiner}>
        <View>
          <Label
            text={label}
            style={{fontSize: scale(18), fontWeight: '500'}}
          />
          <Label
            text={amount}
            style={{
              fontWeight: '500',
              color: appColors.primary,
              paddingVertical: scale(10),
            }}
          />
          <Pressable
            style={{
              borderRadius: scale(3),
              width: '80%',
              paddingVertical: scale(10),
              backgroundColor: appColors?.[color],
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Label
              text={status}
              style={{fontSize: scale(14), color: appColors.white}}
            />
          </Pressable>
        </View>
        <View>
          <FlatList
           
            nestedScrollEnabled
            ItemSeparatorComponent={() => <View style={{padding: scale(2)}} />}
            data={[1, 2, 3, 4]}
            numColumns={2}
            keyExtractor={(item) => `${item}_${new Date().getTime()}_${item}`}
            renderItem={({item}) => (
              <View
                key={item}
                style={{
                  backgroundColor: appColors.lightGreen,
                  height: scale(35),
                  width: scale(35),
                  marginLeft: scale(4),
                  borderRadius: scale(3),
                }}
              />
            )}
          />
        </View>
      </View>
    );
  };
  return (
    <Container  >
      <ScreenHeader navigation={navigation} label="Track Order" />
      <View style={{paddingVertical: scale(20)}}>
        <Label
          text="Sept 23, 2021"
          style={{opacity: scale(0.5), fontSize: scale(13)}}
        />
      </View>
      <OrderCard
        item={{
          label: 'AMU - 9249296 - N',
          amount: '$3503',
          status: 'In transit',
          color: 'yellow',
        }}
      />
      <View style={{flex:1, paddingVertical:scale(20)}}>
      <View style={{paddingVertical: scale(20)}}>
        <Label
          text="Sept 23, 2021"
          style={{opacity: scale(0.5), fontSize: scale(13)}}
        />
      </View>

      <FlatList
      
      keyExtractor={(item)=> `${item.label}_${new Date().getTime()}_${item.amount}`}
        ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
        data={orderList}
        renderItem={({item, index}) => <OrderCard key={index} item={item} />}
      />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContiner: {
    paddingVertical: scale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: appColors.white,
    paddingHorizontal: scale(20),
    ...shadow,
  },
});
