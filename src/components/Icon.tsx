import { ViewStyle } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import { Colors } from '../resources/Colors'

type IconProps = {
  name:string,
  style?:ViewStyle,
  color?:string,
  size?:number
}

const Icon : React.FC<IconProps> = (props:IconProps) => {
  const {name,style,color,size} = props
  return (
    <Feather
      name={name}
      style={style || {}}
      color={color || Colors.black}
      size={size || 20}
    />
  )
}

export default Icon