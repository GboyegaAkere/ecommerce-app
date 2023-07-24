import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import {Ionicons} from "@expo/vector-icons"
import Search from '../screens/Search'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

const ButtomtabNavigator = () => {
    const screenOptions = {
        tabBarShadowLabel:false,
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarStyle:{
            position:"absolute",
            bottom:0,
            right:0,
            left:0,
            elevator:0,
            height:50
        }
    } 
  return(
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
            tabBarIcon:() =>{
                return(
                    <View>
                      <Ionicons name= "home-outline" size={25} color="black" />
                    </View>
                )
            }
        }}
        />

       <Tab.Screen 
            name='Search' 
            component={Search} 
            options={{
                tabBarIcon:() =>{
                    return(
                        <View>
                        <Ionicons name= "search-outline" size={25} color="black" />
                        </View>
                    )
                }
            }}
        />

    <Tab.Screen 
            name='Profile' 
            component={Profile} 
            options={{
                tabBarIcon:() =>{
                    return(
                        <View>
                        <Ionicons name= "person-outline" size={25} color="black" />
                        </View>
                    )
                }
            }}
        /> 
    </Tab.Navigator>
  )
}

export default ButtomtabNavigator