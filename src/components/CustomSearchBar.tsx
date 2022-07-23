import { StyleSheet, TextInputProps, View } from 'react-native'
import React, { useState } from 'react'
import CInput from './CustomInput'
import Icon from "./Icon"
import { responsiveHeight, responsiveWidth } from '../constants/Constants'
import PressableOpacity from './PressableOpacity'

type CustomSearchBarProps = TextInputProps & {
  onSearch: () => void
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = (props: CustomSearchBarProps) => {
  const { onSearch } = props
  const [searchClicked, setSearchClicked] = useState(false)

  const onSearchClicked = () => {
    setSearchClicked(true)
    onSearch()
    setTimeout(() => setSearchClicked(false), 2000)
  }
  return (
    <View style={styles.container}>
      <PressableOpacity disabled={searchClicked} onPress={onSearchClicked}>
        <Icon name='search' size={25} />
      </PressableOpacity>
      <CInput
        {...props}
        style={{ fontSize: 16 }}
        placeholder='Ara'
      />
    </View>
  )
}

export default CustomSearchBar

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(6),
    flexDirection: "row",
    alignItems: "center",
  }
})