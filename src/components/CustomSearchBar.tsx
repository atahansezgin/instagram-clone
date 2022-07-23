import { StyleSheet, View } from 'react-native'
import React from 'react'
import CInput from './CustomInput'
import Icon from "./Icon"
import { responsiveHeight, responsiveWidth } from '../constants/Constants'

type CustomSearchBarProps = {
  value:string
  onSearch:(text:string) => void
  onFocus?:Function
}

const CustomSearchBar : React.FC<CustomSearchBarProps> = (props:CustomSearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon name='search' size={25} />
      <CInput
        value={props.value}
        style={{fontSize:16}}
        onFocus={() => props.onFocus ? props.onFocus() : null }
        containerStyle={{marginLeft:responsiveWidth(18)}}
        placeholder='Ara'
        onChangeText={text => props.onSearch(text)}
      />
    </View>
  )
}

export default CustomSearchBar

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:responsiveWidth(24),
    paddingVertical:responsiveHeight(6),
    flexDirection:"row",
    alignItems:"center",
  }
})