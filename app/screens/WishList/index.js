import React from 'react'
import { View, Text ,FlatList} from 'react-native'
import { scale } from 'react-native-size-matters'
import CheckOutItem from '../../components/CheckOutItem'
import Container from '../../components/Container'
import ScreenHeader from '../../components/ScreenHeader'
import Label from '../../components/Label'
import { appColors } from '../../utils/appColors'
import { bestSellersList } from '../../utils/MockData'

export default function index() {
    const renderBagge= ()=>{
        return <View style={{  backgroundColor:appColors.primary, padding:scale(10), justifyContent:'center', alignItems:'center', borderRadius:scale(3)}}>
             
            <Label text="In Stock"  style={{fontSize:scale(10), color:appColors.white}}/>
        </View>
    }
    return (
        <Container>
            <ScreenHeader label="WishList" /> 
            <FlatList ItemSeparatorComponent={()=> <View style={{padding:scale(10)}} />}  data={bestSellersList} renderItem={({item,index})=> <CheckOutItem noBg hideSteper renderBagge={renderBagge}  {...item}/>} />
        </Container>
    )
}
 