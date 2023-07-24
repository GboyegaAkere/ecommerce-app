import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import tw from "twrnc"
import {Ionicons, Fontisto, Feather} from "@expo/vector-icons"

const Search = () => {
  return (
    <SafeAreaView>
       <View style={tw`flex-row justify-center items-center justify-between bg-blue-100 m-3 h-11 rounded`}>
            <TouchableOpacity>
             <Ionicons name='camera-outline' size={25}/>
            </TouchableOpacity>
            <View style={tw`mr-17`}>
                <TextInput
                 placeholder='what are you lookig for ?'/>
            </View>
            <View style={tw`bg-gray-500 h-10 w-10 rounded`}>
                <TouchableOpacity> 
                 <Feather name='search' size={25} style={tw`self-center mt-2`}/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Search