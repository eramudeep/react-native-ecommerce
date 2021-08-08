import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import AsyncStorage from '@react-native-community/async-storage';  
import rootSaga from "./sagas"
import rootReducer from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    //blacklist:[] //Add reducer if you don`t want to presist it
  }
const middleWares = [sagaMiddleware];

//1
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(...middleWares))
let persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export default {store,persistor}