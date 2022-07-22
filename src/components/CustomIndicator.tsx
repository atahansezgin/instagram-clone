import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../resources/Colors'
import { responsiveHeight } from '../constants/Constants'

type CustomIndicatorProps = {
  data:any[],
  activeIndex:number
}

const CustomIndicator : React.FC<CustomIndicatorProps> = (props:CustomIndicatorProps) => {
  const {data,activeIndex} = props
  return (
    <View style={{flexDirection:"row",alignItems:"center"}}>
      {
        data.map((item,index) => {
          return(
            <View
              key={index}
              style={{
                width:responsiveHeight(6),
                height:responsiveHeight(6),
                borderRadius:100,
                backgroundColor: index===activeIndex? Colors.blue : Colors.border,
                marginRight:10,
                zIndex:90
              }}
            />
          )
        })
      }
    </View>
  )
}

export default CustomIndicator

const styles = StyleSheet.create({})