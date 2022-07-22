import { StyleSheet } from 'react-native'
import React, { memo, useState } from 'react'
import Video, { VideoProperties } from 'react-native-video'
import PressableOpacity from './PressableOpacity'

type CustomVideoProps = VideoProperties & {
  autoPlay?:boolean
}

const CustomVideo : React.FC<CustomVideoProps> = (props:CustomVideoProps) => {
  const [paused,setPaused] = useState(props.autoPlay ? false : true)
  return (
    <PressableOpacity activeOpacity={0.8} style={props.style} onPress={() => setPaused(!paused)}>
      <Video
      {...props}
      paused={paused}
      />
    </PressableOpacity>
  )
}

export default memo(CustomVideo)

const styles = StyleSheet.create({})