import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'

type PressableOpacityProps = TouchableOpacityProps & {
  children?:any
}

const PressableOpacity : React.FC<PressableOpacityProps> = (props:PressableOpacityProps) => {
  return (
    <TouchableOpacity style={[{opacity:props.disabled?0.6:1},props.style]} {...props} >
      {props.children}
    </TouchableOpacity>
  )
}

export default PressableOpacity

const styles = StyleSheet.create({})