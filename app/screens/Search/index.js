import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import Badge from '../../components/Badge';
import Container from '../../components/Container';
import SearchBox from '../../components/SearchBox';
import TitleComp from '../../components/TitleComp';
import { recentSearches } from '../../utils/MockData';

export default function index({navigation}) {
  return (
    <Container>
      <SearchBox hideCamra autoFocus />
      <View style={{paddingVertical: scale(20)}}>
        <TitleComp subLabel="Recent Searches" /> 
        <FlatList style={{paddingVertical:scale(10)}} numColumns={3} ItemSeparatorComponent={()=> <View style={{padding:scale(5) }} /> }    data={recentSearches}  renderItem={({item,index})=> <Badge key={index} label={item} />} />
      </View>

      {/* <View style={{paddingVertical: scale(20)}}>
        <TitleComp heading="Recommended" />
      </View> */}
    </Container>
  );
}
