import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native'
import {Ionicons, Fontisto, Feather, MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const ProductDetails = () => {
  const [count, setCount] = React.useState(0)

  const increament = ()=>{
    setCount(count +1)
  }

  
  const decreament = ()=>{
    // setCount(count -1)
    if(count > 1){
      setCount(count -1)
    }
  }

  return (
   <ScrollView>
      <View style={tw`flex-1`} >
        <View style={tw``}>
          <Image style={tw`w-full h-80 rounded`} source={{uri:"https://i.ibb.co/rtTgs7L/furn.jpg"}}/>
          <View style={tw`justify-between flex-row bottom-79 mx-3`}>
            <TouchableOpacity>
              <Ionicons name='caret-back-outline' size={30}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name='heart-outline' size={30}/>
            </TouchableOpacity>
           
          </View>
          
          
        </View>

        <View style={tw`bg-white bottom-9 mx-1 rounded-t-xl`}>
          <View style={tw`flex-row justify-between items-center mx-3 mt-3`}>
            <Text style={tw`font-bold`}>Leather Recycling</Text>
            <View  style={tw`bg-blue-400 w-20 h-5 rounded`}>
             <Text numberOfLines={1} style={tw`font-bold self-center`}>$500.99</Text>
            </View>
          </View>
          
          <View style={tw`mx-2 flex-row justify-between mt-3`}>
            <View style={tw`flex-row gap-2`}>
                {[1,2,3,4].map((index)=>{
                  return(
                    <View>
                      <Ionicons
                      key={index}
                      name='star'
                      size={25}
                      color="gold"
                      />
                      
                    </View>
                    
                  )
                })}
                <Text style={tw`self-center`}>(4.9)</Text>
            </View>
            <View style={tw`flex-row gap-3 items-center`}>
            <TouchableOpacity onPress={()=>increament()}>
               <Ionicons name='add-circle-outline'size={25}/>
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={()=>decreament()}>
               <Ionicons name='remove-circle-outline'size={25}/>
              </TouchableOpacity>
              
            </View>
          </View>
          <View style={tw`mx-2 mt-3`}>
           <Text style={tw`text-xl font-bold`}>Description</Text>
           <Text>There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even 
              slightly believable. If you are going to use a passage of Lorem Ipsum,always f
             ree from repetition, injected humour, or non-characteristic words etc.</Text>
          </View>

          <View style={tw`flex-row justify-between mt-3 mx-2 bg-blue-200 pr-2 pl-2 h-10 rounded`}>
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons name='location-outline' size={25}/>
              <Text>Nigeria</Text>
            </View>
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons name='bus-outline' size={25}/>
              <Text>Free Delivery</Text>
            </View>
        </View>

        <View style={tw`flex-row items-center justify-between mx-2 mt-2`}>
          <TouchableOpacity style={tw`bg-black w-50 rounded`}>
           <Text style={tw`text-white h-8 self-center mt-3`}>Buy Now</Text>
          </TouchableOpacity>
          
          <View style={tw`bg-black h-8 w-10 rounded-full `}>
            <MaterialCommunityIcons style={tw`self-center mt-1`} name='truck-delivery-outline' size={25} color="white"/>
            
          </View>
        </View>
        </View>
       
      
       
      </View>
      </ScrollView>
  )
}

export default ProductDetails