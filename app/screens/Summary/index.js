import React from 'react';
import {View, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import ScreenHeader from '../../components/ScreenHeader';

export default function index({navigation}) {
  return (
    <Container>
      <ScreenHeader label="Summary" navigation={navigation} />
      <View style={{paddingVertical: scale(30)}}>
        <Text>Summary</Text>
      </View>
    </Container>
  );
}
