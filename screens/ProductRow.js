import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ProductCardRow from './ProductCardRow'

const ProductRow = () => {
    const products = [1,2,3,4,5]
  return (
    <View>
      <View>
        <FlatList
         data={products}
         horizontal
         contentContainerStyle={{columnGap:10, marginHorizontal:15, marginTop:6}}
         renderItem={({item})=>{
            return(
                <ProductCardRow item={item}/>
            )
         }}
        />
      </View>
    </View>
  )
}

export default ProductRow