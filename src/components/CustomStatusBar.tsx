import { StyleSheet, View } from 'react-native'
import React from 'react'
import { responsiveHeight, SCREEN_WIDTH } from '../constants/Constants'
import FastImage from 'react-native-fast-image'
import { Images } from '../resources/Images'
import Icon from "./Icon"
import PressableOpacity from './PressableOpacity'

const CustomStatusBar = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={Images.statusbar_logo}
        style={styles.image}
        resizeMode={"contain"}
      />
      <View style={styles.right}>
        <PressableOpacity style={styles.button}>
          <Icon  name='plus-square' size={25} />
        </PressableOpacity>
        <PressableOpacity style={styles.button}>
          <Icon name='heart' size={25} />
        </PressableOpacity>
        <PressableOpacity style={styles.button}>
          <Icon name='send' size={25} />
        </PressableOpacity>
      </View>
    </View>
  )
}

export default CustomStatusBar

const styles = StyleSheet.create({
  container:{
    // height:responsiveHeight(36),
    width:SCREEN_WIDTH,
    backgroundColor:"#fff",
    padding:12,
    flexDirection:"row",
    alignItems:"center",
  },
  image:{
    height:"100%",
    width:104,
  },
  right:{
    marginLeft:"auto",
    flexDirection:"row",
    alignItems:"center",
  },
  button:{
    marginHorizontal:5,
  }
})