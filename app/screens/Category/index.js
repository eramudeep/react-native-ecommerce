import React,{useState} from 'react';
import {View, Text, FlatList, Pressable,RefreshControl} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import ProductCard from '../../components/ProductCard';
import TitleComp from '../../components/TitleComp';
import {bestSellersList,topBrands} from '../../utils/MockData';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '../../utils/appColors';
import BottomButtons from '../../components/BottomButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReduxWrapper from '../../utils/ReduxWrapper';

function index({products:{products}, productList,navigation, route: {params}}) {

   const [refreshing, setRefreshing] = useState(false);
   const onRefresh = ()=>{
    setRefreshing(true);
    //Fetch the products from the server
    setTimeout(()=>{
      setRefreshing(false);
    },2000)

    console.log({refreshing});
   }
  const _renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: scale(20),
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={scale(25)} />
        </Pressable>

        <Label
          text={params.item.label}
          style={{fontWeight: '500', fontSize: scale(22)}}
        />

        <View
          style={{
            height: scale(45),
            width: scale(45),
            backgroundColor: appColors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(25),
          }}>
          <Feather name="search" size={scale(20)} color={appColors.white} />
        </View>
      </View>
    );
  };
  const BrandCard = ({item}) => {
    const {label,icon, products} =item
    return (
      <View style={{  borderRadius:scale(5), backgroundColor:appColors.white, flexDirection:"row", paddingHorizontal:scale(20),paddingVertical:scale(20)}}>
        <View style={{marginRight:scale(10), backgroundColor:appColors.black,height:scale(40), width:scale(40), justifyContent:'center', alignItems:'center', borderRadius:scale(20) }}>
            <Ionicons name={icon} size={scale(25)} color={appColors.white} />
        </View>
        <View>
          <Label text={label}  style={{fontSize:scale(18), fontWeight:"600"}}/> 
          <Label text={products} style={{fontSize:scale(14), opacity:scale(.4),marginTop:scale(5)}}/>
        </View>
      </View>
    );
  };
  return (
    <>
      <Container>
       {/*  {_renderHeader()}
        <View style={{paddingVertical: scale(20)}}>
          <TitleComp heading={'Top Brands'} />
          <View style={{paddingVertical:scale(20)}}>
            
            <FlatList showsHorizontalScrollIndicator={false} ItemSeparatorComponent={()=> <View style={{padding:scale(10)}} /> } horizontal data={topBrands}  renderItem={({item,index})=><BrandCard key={index} item={item}/> } />
          </View>
        </View> */}
        <View style={{flex: 1, marginBottom:scale(50),   alignItems:'center'}}>
          <FlatList 
          refreshControl={
            <RefreshControl colors={[appColors.primary, appColors.secondary]} refreshing={refreshing} onRefresh={onRefresh} />
          }
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=> <View style={{padding:scale(10) }} />}
            numColumns={2}
            data={products}
            renderItem={({item, index}) => (
              <ProductCard
                key={index}
                navigation={navigation}
                item={{...item, isNew: index < 1}}
              />
            )}
          />
        </View>
      </Container>
      <BottomButtons onPress={()=> navigation.navigate("Filters")} priceLabel={'No Filter Applied'} buttonLabel="Filter" />
    </>
  );
}
export default ReduxWrapper(index)