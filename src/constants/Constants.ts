import { Dimensions } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("window").height
export const SCREEN_WIDTH = Dimensions.get("window").width

export const responsiveHeight = (height: number) => SCREEN_HEIGHT / (812 / height)
export const responsiveWidth = (width: number) => SCREEN_WIDTH / (375 / width)