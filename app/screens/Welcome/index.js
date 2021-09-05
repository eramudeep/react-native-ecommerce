import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function index({navigation}) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();    
    function onAuthStateChanged(user) { 
      setUser(user);
      if(user){
        navigation.navigate("Home")
      }else{
        navigation.navigate("Login")
      }
      if (initializing) setInitializing(false);
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null; 


    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <Text>Welcome to Amusoftech</Text>
        </View>
    )
}
