import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { memo, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { SCREEN_WIDTH } from '../../../constants/Constants'
import Video from 'react-native-video'
import CustomVideo from '../../../components/CustomVideo'

const GridComponent = (props: { item: { type: "IMAGE" | "VIDEO", uri: string } }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <View>
      {
        props.item.type === "IMAGE" ?
          <FastImage
            source={{
              uri: props.item.uri,
              priority: FastImage.priority.normal,
            }}
            style={styles.image}
            onLoadEnd={() => setLoaded(true)}
          />
          :
          <CustomVideo
          onLoad={() => setLoaded(true)}
          source={{uri:props.item.uri}}
          style={styles.image}
          muted
          repeat
          />
      }

      {/* <Video
        muted
        source={{uri:"https://player.vimeo.com/external/505901525.sd.mp4?s=6a8294684fe4e4329f1aba53478009d9313a17f0&profile_id=165&oauth2_token_id=57447761"}}
        onReadyForDisplay={() => setLoaded(true)}
        style={stles.image}
      /> */}
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