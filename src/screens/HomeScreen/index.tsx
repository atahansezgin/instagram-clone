import React, { useCallback, useEffect, useState } from 'react'
import DefaultScreen from '../../components/DefaultScreen'
import Post from './components/Post'
import CFlatList from '../../components/CustomFlatList'
import CustomSearchBar from '../../components/CustomSearchBar'
import axios from 'axios'
import GridList from './components/GridList'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Constants'
import { IPost } from '../../models/Post'
import { BackHandler } from 'react-native'

type HomeScreenProps = {
  navigation?: any
  route?: any
}

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
  const [data, setData] = useState<IPost[]>([])
  const [temp, setTemp] = useState<{ type: "IMAGE" | "VIDEO", uri: string }[]>([])
  const [search, setSearch] = useState<string>("")
  const [activeIndex, setActiveIndex] = useState(4)

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      setSearch("")
      return true
    })
    axios.get("https://62d7280551e6e8f06f19749f.mockapi.io/api/posts")
      .then((res) => {
        setData(res.data)
        let temp: any[] = []
        res.data.map((x: any) => {
          x.data.map((item: any) => temp.push({ type: x.type, uri: item }))
        })
        setTemp(temp)
      })
  }, [])

  const onSearch = (text: string) => setSearch(text)

  const shuffleData = () => {
    if(search)
    setTimeout(() => {
      let newArr = temp.slice()
      newArr.sort((a, b) => Math.random() - 0.5)
      setTemp(newArr)
    },400)
  }

  const getItemLayout = useCallback((data: any, index: any) => {
    return {
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    };
  }, [])

  const loadAgain = () => setActiveIndex(prevState => prevState + 4)

  const renderItem = useCallback(({ item }: any) => <Post item={item} />, [])
  const keyExtractor = useCallback((item: any) => item.id, [])
  const onEndReached = useCallback(loadAgain, [])

  return (
    <DefaultScreen>
      <CustomSearchBar
        value={search}
        onSearch={shuffleData}
        onChangeText={onSearch}
      />
      {search === "" ?
        <CFlatList
          data={data.slice(0, activeIndex)}
          onEndReached={onEndReached}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
        />
        :
        <GridList
          data={temp}
        />
      }
    </DefaultScreen>
  )
}

export default HomeScreen