import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import { SafeAreaViewProps } from 'react-native-safe-area-context'
import { SCREEN_HEIGHT } from '../constants/Constants'
import CustomStatusBar from './CustomStatusBar'
import { Colors } from '../resources/Colors'


type DefaultScreenProps = SafeAreaViewProps & {
  children?:any
  hideTop?:boolean
}

const DefaultScreen : React.FC<DefaultScreenProps> = (props:DefaultScreenProps) => {
  return (
    <SafeAreaView style={[styles.container,props.style,]}>
      {props.hideTop ? null : <CustomStatusBar/>}
      <View style={{flex:1}}>
        {props.children}
      </View>
    </SafeAreaView>
  )
}

export default DefaultScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    minHeight:SCREEN_HEIGHT,
    backgroundColor:Colors.white,
  }
})