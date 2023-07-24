import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import tw from "twrnc"
import {Ionicons, Fontisto, Feather} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'


const ProductCardRow = () => {
    const navigation = useNavigation()
  return (
   <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
     <View style={tw`w-45  bg-blue-100 rounded pb-2` }>
        <View style={tw`self-center mt-2`}>
             <Image 
              style={tw`w-43 h-25 rounded `}
            source={{uri:"https://i.ibb.co/rtTgs7L/furn.jpg"}}
        /> 
        </View>
        <View style={tw`ml-3 mt-2`}>
         <Text style={tw`text-lg font-bold`}>Kid's Bulk Shoe</Text>
         <Text style={tw`mt-1`}>PlayFull shoe</Text>
         <View style={tw`flex-row justify-between items-center`} >
            <Text style={tw`font-bold`}>$400</Text>
            <TouchableOpacity style={tw`mr-2 bg-blue-600 rounded-full`}>
             <Ionicons name='add-outline' size={25} color="white"/> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
   </TouchableOpacity>
   
  )
}

export default ProductCardRow