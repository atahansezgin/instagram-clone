import { StyleSheet, View, ActivityIndicator, TouchableHighlight } from 'react-native'
import React, { memo, useCallback, useRef, useState } from 'react'
import FastImage from 'react-native-fast-image'
import { responsiveHeight, responsiveWidth, SCREEN_WIDTH } from '../../../constants/Constants'
import PagerView from 'react-native-pager-view';
import CText from '../../../components/CustomText';
import PressableOpacity from '../../../components/PressableOpacity';
import Icon from "../../../components/Icon"
import { IPost } from '../../../models/Post';
import CustomIndicator from '../../../components/CustomIndicator';
import CustomVideo from '../../../components/CustomVideo';
import { Colors } from '../../../resources/Colors';

type PostProps = {
  item: IPost,
}

const Post: React.FC<PostProps> = (props: PostProps) => {
  const { type, data, username, avatar, description } = props.item
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [liked,setLiked] = useState(false)

  const onLike = useCallback(() => setLiked(!liked),[])
  const onPageSelected = useCallback((e:any) => setActiveIndex(e.nativeEvent.position),[])
  const onLoadEnd = useCallback(() => setLoading(false),[])

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
              onPageSelected={onPageSelected}
            >
              {
                data.map((item, index) => {
                  return (
                    <View key={index}>
                      <FastImage
                        source={{ uri: item }}
                        style={styles.image}
                        onLoadEnd={onLoadEnd}
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

      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <PressableOpacity style={styles.button} onPress={onLike}>
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
            <View style={styles.sliderIndicator}>
              <CustomIndicator data={data} activeIndex={activeIndex} />
            </View>
            :
            null
        }
        <PressableOpacity style={styles.bookmark}>
          <Icon name='bookmark' size={25} />
        </PressableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <CText style={styles.like}>
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
    marginBottom: responsiveHeight(10),
  },
  userContainer: {
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(10) ,
    flexDirection: "row", 
    alignItems: "center"
  },
  avatar: {
    width: responsiveHeight(30), 
    height: responsiveHeight(30), 
    borderRadius: 100, 
    marginRight: responsiveWidth(10)
  },
  username: {
    fontSize: 14
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    backgroundColor: Colors.backgroundGray
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  button: {
    marginRight: responsiveWidth(10),
  },
  sliderIndicator:{
    position: "absolute", 
    width: SCREEN_WIDTH, 
    alignItems: "center"
  },
  buttonContainer:{
    alignItems: "center", 
    flexDirection: "row", 
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(10)
  },
  buttons:{
    alignItems: "center", 
    flexDirection: "row",
    zIndex:10
  },
  bookmark:{
    marginLeft: "auto"
  },
  descriptionContainer:{
    paddingVertical: responsiveHeight(5), 
    paddingHorizontal: responsiveWidth(10)
  },
  like:{
    fontSize: 12, 
    fontWeight: "700", 
    marginBottom: responsiveHeight(5) 
  }
})