/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ProductDetails from '../screens/ProductDetails';
import Verification from '../screens/Verification';
import WriteReview from '../screens/WriteReview';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Filters from '../screens/Filter';
import Search from '../screens/Search';
import CheckoutDelivery from '../screens/Checkout/CheckoutDelivery';
import CheckOutSteper from '../screens/Checkout/CheckOutSteper';
import Summary from '../screens/Summary';
import Account from '../screens/Account';

import Feather from 'react-native-vector-icons/dist/Feather';
import {appColors} from '../utils/appColors';
import {scale} from 'react-native-size-matters';
import Category from '../screens/Category';

export const RoutesList = [
  {
    name: 'Login',
    component: Login,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'Login',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
  {
    name: 'SignUp',
    component: SignUp,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'SignUp',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Verification',
    component: Verification,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'Verification',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
  {
    name: 'Home',
    component: Home,
    options: {
      //tabBarBadge: 3,
      tabBarIcon: (props) => (
        <Feather
          name={'mouse-pointer'}
          size={scale(20)}
          color={appColors.primary}
          {...props}
        />
      ),
      tabBarLabel: 'Home',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
  {
    name: 'Cart',
    component: Cart,
    options: {
      //tabBarBadge: 3,
      tabBarIcon: (props) => (
        <Feather
          name={'shopping-cart'}
          size={scale(20)}
          color={appColors.primary}
          {...props}
        />
      ),
      tabBarLabel: 'Cart',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'ProductDetails',
    component: ProductDetails,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'ProductDetails',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'WriteReview',
    component: WriteReview,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      tabBarBadge: 3,
      tabBarLabel: 'WriteReview',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Checkout',
    component: Checkout,
    options: {
      tabBarButton: (props) => null,
      //tabBarVisible:false,
      //tabBarBadge: 3,
      tabBarLabel: 'Checkout',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Category',
    component: Category,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarLabel: 'Category',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Filters',
    component: Filters,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarLabel: 'Filters',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Search',
    component: Search,
    options: {
      tabBarButton: (props) => null,
      //tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarLabel: 'Search',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'CheckoutDelivery',
    component: CheckoutDelivery,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarLabel: 'CheckoutDelivery',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'CheckOutSteper',
    component: CheckOutSteper,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarLabel: 'CheckOutSteper',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Summary',
    component: Summary,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarLabel: 'Summary',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Account',
    component: Account,
    options: {
     // tabBarButton: (props) => null,
      //tabBarVisible: false,
      //tabBarBadge: 3,
      tabBarIcon: (props) => (
        <Feather
          name={'user'}
          size={scale(20)}
          color={appColors.primary}
          {...props}
        />
      ),
      tabBarLabel: 'Account',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  
];
