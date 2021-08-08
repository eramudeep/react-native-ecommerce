/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Verification from '../screens/Verification';

import {appColors} from '../utils/appColors';

export const RoutesList = [
  

  {
    name: 'Login',
    component: Login,
    options: {
      tabBarButton: (props) => null,
      tabBarVisible:false,  
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
      tabBarVisible:false,  
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
      tabBarVisible:false,  
      tabBarBadge: 3,
      tabBarLabel: 'Verification',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'Home',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
];
