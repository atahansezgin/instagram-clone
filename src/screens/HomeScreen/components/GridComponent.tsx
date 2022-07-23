import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { SCREEN_WIDTH } from '../../../constants/Constants'
import CustomVideo from '../../../components/CustomVideo'

type GridComponentProps = {
  item: {
    type: "IMAGE" | "VIDEO",
    uri: string
  },
  style?: ViewStyle
}

const GridComponent: React.FC<GridComponentProps> = (props: GridComponentProps) => {
  const [loaded, setLoaded] = useState(false)
  const onLoadEnd = useCallback(() => setLoaded(true),[])
  return (
    <View style={props.style}>
      {
        props.item.type === "IMAGE" ?
          <FastImage
            source={{
              uri: props.item.uri,
              priority: FastImage.priority.normal,
            }}
            style={styles.image}
            onLoadEnd={onLoadEnd}
          />
          :
          <CustomVideo
            autoPlay
            onLoad={onLoadEnd}
            source={{ uri: props.item.uri }}
            style={styles.image}
            muted
            repeat
          />
      }
      <ActivityIndicator
        animating={!loaded}
        style={styles.indicator}
      />
    </View>
  )
}

export default memo(GridComponent)

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 3,
  },
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})