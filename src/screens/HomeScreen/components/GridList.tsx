import { StyleSheet, View } from 'react-native'
import React, { useCallback } from 'react'
import CFlatList from '../../../components/CustomFlatList'
import { SCREEN_WIDTH } from '../../../constants/Constants'
import GridComponent from './GridComponent'

type GridListProps = {
  data: any[]
}

const GridList: React.FC<GridListProps> = (props: GridListProps) => {
  const ITEM_HEIGHT = SCREEN_WIDTH / 3; // fixed height of item component
  const getItemLayout = useCallback((data: any, index: any) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  }, [])
  const renderItem = useCallback(({ item }: {item:{type:"IMAGE" | "VIDEO",uri:string}}) => <GridComponent item={item} />, [])
  const keyExtractor = useCallback((item: any) => props.data.indexOf(item).toString(),[])

  return (
    <View style={styles.container}>
      <CFlatList
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={10}
        style={styles.list}
        getItemLayout={getItemLayout}
        numColumns={3}
        data={props.data}
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