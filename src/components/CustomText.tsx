import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'
import { Colors } from '../resources/Colors'

type CustomTextProps = TextProps & {
  children?:any
}

const CText : React.FC<CustomTextProps> = (props:CustomTextProps) => {
  return (
    <Text 
      {...props}
      style={[styles.text,props.style]}
    >
      {props.children}
    </Text>
  )
}

export default CText

const styles = StyleSheet.create({
  text:{
    fontSize:14,
    color:Colors.black
  }
})