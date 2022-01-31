import React, {useState,useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function useListners({collectionName,callBack}) {
    const [docs, setDocs] = useState([])
  function onResult(QuerySnapshot) {
     console.log('Got Users collection result.', QuerySnapshot?.docs);
     setDocs(QuerySnapshot?.docs)  
  }

  function onError(error) {
    console.error(error);
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection(collectionName)
      .onSnapshot(onResult, onError);
    return () => subscriber();
  }, [ ]);
  return docs;
}
