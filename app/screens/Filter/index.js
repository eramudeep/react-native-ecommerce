import React,{useState} from 'react'
import { View, Text,Pressable,FlatList } from 'react-native'
import Container from '../../components/Container'
import ScreenHeader from '../../components/ScreenHeader'
import TitleComp from '../../components/TitleComp'
import Feather from 'react-native-vector-icons/Feather';
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import BottomButtons from '../../components/BottomButtons'

export default function index({navigation}) {
    const [colorFilter, setColorFilter] = useState(false)
    return (
        <>
        <Container isScrollable>
            <ScreenHeader label="Filters" navigation={navigation} showSearch rightIcon="x-octagon"/>
             <View style={{paddingVertical:scale(20)}}>
                <TitleComp subLabel="No Settings" heading="Popularity" renderRight={()=> <Feather name="chevron-down" size={scale(20)}  />} />
             </View>
             <View style={{paddingVertical:scale(20)}}>
                <TitleComp subLabel="Amusoftech, Apple, Mi" heading="Brands" renderRight={()=> <Feather name="chevron-down" size={scale(20)}  />} />
             </View>

             <View style={{paddingVertical:scale(20)}}>
                <TitleComp subLabel="$20 - $ 1200" heading="Price" renderRight={()=> <Feather name="chevron-down" size={scale(20)}  />} />
             </View>

             <View style={{paddingVertical:scale(20)}}>
                <TitleComp subLabel={!colorFilter ? "Red" : null} heading="Color" renderRight={()=> <Pressable onPress={()=>setColorFilter(!colorFilter)} ><Feather name={colorFilter ? "chevron-up":"chevron-down"} size={scale(20)}  /></Pressable> } /> 
                {colorFilter&&<View style={{paddingVertical:scale(20)}}> 
                    <FlatList showsHorizontalScrollIndicator={false} keyExtractor={(item)=> item} ItemSeparatorComponent={()=> <View style={{padding:scale(10)}} />} horizontal renderItem={({item,index}) =>  <View  key={index}  style={{backgroundColor:item, height:scale(40), width:scale(40), borderRadius:scale(10)}}/>}  data={Object.values(appColors)} /> 
                </View>}
             </View>
             

             <View style={{paddingVertical:scale(20)}}>
                <TitleComp subLabel="4 Star" heading="Rating" renderRight={()=> <Feather name="chevron-down" size={scale(20)}  />} />
             </View>

             <View style={{paddingVertical:scale(20)}}>
                <TitleComp subLabel="No Settings" heading="Shipped From" renderRight={()=> <Feather name="chevron-down" size={scale(20)}  />} />
             </View> 
              
              
        </Container>
        <BottomButtons buttonLabel={"Apply"} priceLabel="Filters" />
        </>
    )
}
