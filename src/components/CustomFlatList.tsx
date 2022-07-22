import { FlatList, FlatListProps, StyleSheet } from 'react-native'
import React from 'react'

type CustomFlatListProps = FlatListProps<any> & {

}

const CFlatList : React.FC<CustomFlatListProps> = (props:CustomFlatListProps) => {
  return (
    <FlatList
      {...props}
      style={[props.style,styles.list]}
      data={props.data}
      renderItem={props.renderItem}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator || false}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator || false}
    />
  )
}

export default CFlatList

const styles = StyleSheet.create({
  list:{
    
  }
})