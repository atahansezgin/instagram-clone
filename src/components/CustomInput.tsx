import { StyleSheet, TextInputProps, View, ViewStyle } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { responsiveHeight } from '../constants/Constants'
import { Colors } from '../resources/Colors'

type CustomInputProps = TextInputProps & {
  containerStyle?:ViewStyle
}

const CInput : React.FC<CustomInputProps> = (props:CustomInputProps) => {
  return (
    <View style={[styles.container,props.containerStyle]}>
      <TextInput textAlignVertical="center" {...props} style={[styles.input,props.style]} />
    </View>
  )
}

export default CInput

const styles = StyleSheet.create({
  container:{
    flex:1,
    minHeight:responsiveHeight(44),
    maxHeight:responsiveHeight(44),
    minWidth:"100%",
    paddingLeft:10,
    justifyContent:"center",
  },
  input:{
    flex:1,
    fontSize:14,
    color:Colors.black,
    paddingVertical:0
  }
})