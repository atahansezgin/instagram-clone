import { StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import CFlatList from '../../../components/CustomFlatList'
import { responsiveHeight, responsiveWidth, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/Constants'
import GridComponent from './GridComponent'

type GridListProps = {
  data: {
    type:"IMAGE"|"VIDEO",
    uri:string
  }[]
}

const GridList: React.FC<GridListProps> = (props: GridListProps) => {
  const possibleVisibleItemCount = (SCREEN_HEIGHT/(SCREEN_WIDTH/3))*3
  const [activeIndex,setActiveIndex] = useState(possibleVisibleItemCount)
  const loadAgain = useCallback(() => setActiveIndex(prevState => prevState + 6),[])

  const getItemLayout = useCallback((data: any, index: any) => {
    return {
      length: SCREEN_WIDTH / 3,
      offset: SCREEN_WIDTH / 3 * index,
      index,
    };
  }, [])
  const renderItem = useCallback(
    ({ item,index }: {item:{type:"IMAGE" | "VIDEO",uri:string},index:number}) => <GridComponent key={index} item={item} style={{
      marginBottom:responsiveHeight(5),
      marginRight:index%3 !== 2 ? responsiveWidth(5) : 0
    }} />
    ,[])
  const keyExtractor = useCallback((item: any) => props.data.indexOf(item).toString(),[])
  const onEndReached = useCallback(loadAgain,[])
  return (
    <View style={styles.container}>
      <CFlatList
        onEndReached={onEndReached}
        style={styles.list}
        getItemLayout={getItemLayout}
        numColumns={3}
        data={props.data.slice(0,activeIndex)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  )
}

export default GridList

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
  },
  image: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 3
  },
})