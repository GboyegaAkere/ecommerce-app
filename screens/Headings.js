import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons, Fontisto, Feather} from "@expo/vector-icons"
import tw from "twrnc"
import { TouchableOpacity } from 'react-native'

const Headings = () => {
  return (
    <View>
        <View style={tw`ml-3 flex-row justify-between items mt-3 mr-2`}>  
         <Text style={tw`text-xl font-bold`}>New Arrivals</Text>
          <TouchableOpacity>
           <Ionicons name='ios-grid' size={25} color="gray"/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Headings