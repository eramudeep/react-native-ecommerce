import firestore from '@react-native-firebase/firestore';
 export default async (collectionName,data) => {    

     return await firestore().collection(collectionName).add(data)

}