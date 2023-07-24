import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { TouchableOpacity } from 'react-native'
import {Ionicons, Fontisto, Feather} from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Wellcome = () => {
    const navigation = useNavigation()
  return (
    <View>
        <View style={tw` w-full ml-4`}>
            <Text style={tw`font-bold text-3xl`}>Find The Most</Text>
            <Text  style={tw`text-2xl font-bold tracking-wider`}>Luxurious Furniture</Text>
        </View>


            {/* //THIS IS THE SEARCH AREA DESIGN */}
        <View style={tw`flex-row justify-center items-center justify-between bg-blue-100 ml-3 mr-2 h-11 rounded`}>
            <TouchableOpacity>
                <Feather name='search' size={25}/>
            </TouchableOpacity>
            <View style={tw`mr-17`}>
                <TextInput
                 onPressIn={()=>navigation.navigate("Search")}
                 placeholder='what are you lookig for ?'/>
            </View>
            <View style={tw`bg-gray-500 h-10 w-10 rounded`}>
                <TouchableOpacity>
                 <Ionicons name='camera-outline' size={25} style={tw`self-center mt-2`}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Wellcome