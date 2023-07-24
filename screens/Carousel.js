import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox} from 'react-native-image-slider-box'

const Carousel = () => {
    const slides = [
      "https://i.ibb.co/qdCTx4t/fur.jpg",
      "https://i.ibb.co/qdCTx4t/fur.jpg",
      "https://i.ibb.co/qdCTx4t/fur.jpg",
      "https://i.ibb.co/qdCTx4t/fur.jpg",
     ]


  return (
    <View>
      <SliderBox
      //  circleloop
      //  autoplay
       images ={slides}
       dotColor ="blue"
       inactiveDotColor="black"
       ImageComponentStyle={{borderRadius:15, width:"95%", marginTop:3}}
      />
    </View>
  )
}

export default Carousel