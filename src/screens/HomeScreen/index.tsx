import React, { useCallback, useEffect, useState } from 'react'
import DefaultScreen from '../../components/DefaultScreen'
import Post from './components/Post'
import CFlatList from '../../components/CustomFlatList'
import CustomSearchBar from '../../components/CustomSearchBar'
import axios from 'axios'
import GridList from './components/GridList'
import { SCREEN_WIDTH } from '../../constants/Constants'
import { IPost } from '../../models/Post'

type HomeScreenProps = {
  navigation?: any
  route?: any
}

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
  const [data, setData] = useState<IPost[]>([])
  const [temp, setTemp] = useState<IPost[]>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    axios.get("https://62d7280551e6e8f06f19749f.mockapi.io/api/posts")
      .then((res) => {
        setData(res.data)
      })
  }, [])

  useEffect(() => {
    let temp: any[] = []
    if (data.length > 0) {
      data.map(x => {
        x.data.map(item => temp.push({ type: x.type, uri: item }))
      })
      setTemp(temp)
    }
  }, [data])

  const getItemLayout = useCallback((data: any, index: any) => {
    return {
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    };
  }, [])

  const renderItem = useCallback(({ item }: any) => <Post item={item} />, [])
  const keyExtractor = useCallback((item: any) => item.id, [])

  return (
    <DefaultScreen>
      <CustomSearchBar
        onSearch={text => setSearch(text)}
      />
      {search === "" ?
        <CFlatList
          initialNumToRender={data.length}
          removeClippedSubviews
          data={data}
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