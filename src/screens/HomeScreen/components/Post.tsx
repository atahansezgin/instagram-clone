import { StyleSheet, View, ActivityIndicator, TouchableHighlight } from 'react-native'
import React, { memo, useRef, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { SCREEN_WIDTH } from '../../../constants/Constants'
import PagerView from 'react-native-pager-view';
import CText from '../../../components/CustomText';
import PressableOpacity from '../../../components/PressableOpacity';
import Icon from "../../../components/Icon"
import { IPost } from '../../../models/Post';
import CustomIndicator from '../../../components/CustomIndicator';
import CustomVideo from '../../../components/CustomVideo';

type PostProps = {
  item: IPost,
}

const Post: React.FC<PostProps> = (props: PostProps) => {
  const { type, data, username, avatar, description } = props.item
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [liked,setLiked] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <FastImage
          source={{ uri: avatar }}
          style={styles.avatar}
        />
        <CText style={styles.username}>
          {username}
        </CText>
      </View>
      {
        type === "IMAGE" ?
            <PagerView
              orientation="horizontal"
              initialPage={0}
              style={styles.image}
              onPageSelected={e => setActiveIndex(e.nativeEvent.position)}
            >
              {
                data.map((item, index) => {
                  return (
                    <View key={index}>
                      <FastImage
                        source={{ uri: item }}
                        style={styles.image}
                        onLoadEnd={() => setLoading(false)}
                      />
                      <ActivityIndicator style={styles.activityIndicator}
                        animating={loading} />
                    </View>

                  )
                })
              }

            </PagerView>
          :
          <CustomVideo
            autoPlay
            style={styles.image}
            source={{ uri: data[0] }}
            repeat
          />
      }

      <View style={{ alignItems: "center", flexDirection: "row", padding: 10 }}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <PressableOpacity style={styles.button} onPress={() => setLiked(!liked)}>
            <Icon name='heart' size={25} color={liked ? "red" : "#000"} />
          </PressableOpacity>
          <PressableOpacity style={styles.button}>
            <Icon name='message-circle' size={25} />
          </PressableOpacity>
          <PressableOpacity style={styles.button}>
            <Icon name='send' size={25} />
          </PressableOpacity>
        </View>
        {
          data.length > 1 ?
            <View style={{ position: "absolute", width: SCREEN_WIDTH, alignItems: "center" }}>
              <CustomIndicator data={data} activeIndex={activeIndex} />
            </View>
            :
            null
        }
        <PressableOpacity style={{ marginLeft: "auto" }}>
          <Icon name='bookmark' size={25} />
        </PressableOpacity>
      </View>
      <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
        <CText style={{ fontSize: 12, fontWeight: "700", marginBottom: 5 }}>
          1800 Beğenme
        </CText>
        <CText style={{ fontSize: 12 }}>
          <CText style={{ fontSize: 12, fontWeight: "600" }}>
            {username}
          </CText>
          {" "}{description}
        </CText>
      </View>

    </View>
  )
}

export default memo(Post)

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  userContainer: {
    padding: 10, flexDirection: "row", alignItems: "center"
  },
  avatar: {
    width: 30, height: 30, borderRadius: 100, marginRight: 10
  },
  username: {
    fontSize: 14
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    backgroundColor: "#e1e1e1"
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  button: {
    marginRight: 10,
  }
})