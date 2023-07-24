// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  tw  from 'twrnc';
import HomeScreen from './screens/HomeScreen';
import ButtomtabNavigator from './navigation/ButtomTabNavigator';
import Cart from './screens/Cart';
import ProductDetails from './components/ProductDetails';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="buttom" component={ButtomtabNavigator} options={{headerShown:false}} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='Details' component={ProductDetails} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;