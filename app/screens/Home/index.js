import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import {  } from 'react-native-gesture-handler';
import { features, starterIntro } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors } from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import AvatarImage from '../../components/AvatarImage';
import Divider from '../../components/Divider';

export default function Home() {
    const [isError, setIsError] = useState({})
    const [text, setText] = useState("hello")
    let error = useSelector(state => state.error)// getting from reducer.
    const dispatch = useDispatch()
    const hasError=(error)=>{
        dispatch(setError({error}))//here we can call a action to set an error in reducer.
    }
    console.log("error is =>",isError);
    useEffect(() => {
        setIsError(error)
    }, [error])
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Label style={styles.headerText}
            text={"Welcome to  React native starter kit with redux"}/>
        </View>
        <ScrollView style={styles.scrollContainer}>
          
          <Label text={"What is React Native Starter?"} style={styles.TitleText}/>
            {starterIntro.map((val,key)=>{
                 return(
                    <Label key={key} style={{fontSize:16,lineHeight:25,marginBottom:30 }} text={val}/>
                 )
             })}
            <Label style={styles.TitleText} text={"What's inside"}/>
             {features.map((val,key)=>{
                 return(
                    <Label key={key} text={`• ${val}`} style={{fontSize:18,lineHeight:36,fontWeight:"500" }}/>
                 )
             })}
             <Divider isDark/>
             <CustomInput placeholder={"enter text"} onChangeText={val=>setText(val)}/>
          <CustomButton label={"Button"} onPress={()=>alert(text)}/>
        </ScrollView>
        
      </View>
    )
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
      textAlign:'center'
    },
    TitleText: {
        fontSize: 25,
        // padding: 20,
        marginVertical: 20,
      },
    scrollContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    
  });