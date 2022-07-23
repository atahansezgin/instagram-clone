import React, { memo, useState } from 'react'
import Video, { VideoProperties } from 'react-native-video'
import PressableOpacity from './PressableOpacity'

type CustomVideoProps = VideoProperties & {
  autoPlay?:boolean
}

const CustomVideo : React.FC<CustomVideoProps> = (props:CustomVideoProps) => {
  const [paused,setPaused] = useState(props.autoPlay ? false : true)

  const onPause = () => setPaused(!paused)
  return (
    <PressableOpacity activeOpacity={0.8} style={props.style} onPress={onPause}>
      <Video
      {...props}
      paused={paused}
      />
    </PressableOpacity>
  )
}

export default memo(CustomVideo)