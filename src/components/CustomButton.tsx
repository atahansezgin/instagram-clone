import { StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import CText from './CustomText'
import { responsiveHeight } from '../constants/Constants'

type CustomButtonProps = TouchableOpacityProps & {
  text:string
  labelStyle?:TextStyle,
}

const CButton : React.FC<CustomButtonProps> = (props:CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container,props.style,{opacity:props.disabled?0.4:1}]} {...props} >
      <CText style={[styles.label,props.labelStyle]}>
        {props.text}
      </CText>
    </TouchableOpacity>
  )
}

export default CButton

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#3797EF",
    minHeight:responsiveHeight(44),
    minWidth:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  label:{
    fontSize:14,
    fontWeight:"600",
    color:"#fff"
  }
})