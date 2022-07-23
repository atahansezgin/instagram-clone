import { FlatList, FlatListProps } from 'react-native'
import React from 'react'

type CustomFlatListProps = FlatListProps<any> & {

}

const CFlatList : React.FC<CustomFlatListProps> = (props:CustomFlatListProps) => {
  return (
    <FlatList
      {...props}
      data={props.data}
      renderItem={props.renderItem}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator || false}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator || false}
    />
  )
}

export default CFlatList