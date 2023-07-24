import { View, Text, SafeAreaView, TouchableOpacity  } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {Ionicons, Fontisto} from "@expo/vector-icons"
import Wellcome from '../components/Wellcome'
import { ScrollView } from 'react-native-gesture-handler'
import Carousel from './Carousel'
import Headings from './Headings'
import ProductRow from './ProductRow'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={tw`ml-3 mt-2 mr-3`}>
            <View style={tw`flex-row  justify-between items-center`}>
                <Ionicons name='location-outline' color="gray" size={25}/>
                <Text>Akure, Nigeia</Text>
                <View style={tw`relative`} >
                  <TouchableOpacity>
                    <Fontisto name='shopping-bag' size={23} color='black'/>
                  </TouchableOpacity>
                   <View style={tw`bg-black rounded rounded-full w-3 self-center absolute bottom-4`} >
                      <Text style={tw`self-center text-white text-xs`}>6</Text>
                   </View>
                  
                </View>
             </View>
        </View>  

        <ScrollView>
          <Wellcome/>
          <Carousel/>
          <Headings/>
          <ProductRow/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen