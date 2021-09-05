/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesList} from './routes'; 
import {publicRoutes} from './publicRoutes'; 
import {appColors} from '../utils/appColors';

const Tab = createBottomTabNavigator();

export default function TabNavigationStack({isAuth}) {
   const [routes, setRoutes] = React.useState( [...publicRoutes,...RoutesList ] )

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: appColors.primary,
          inactiveTintColor: appColors.darkGray,
        }}>
        { routes?.map((route, key) => {
          const {name, component, options} = route;
          return (
            <Tab.Screen
              key={key}
              name={name}
              component={component}
              options={options}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
