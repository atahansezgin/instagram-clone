import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CText from '../../components/CustomText'
import DefaultScreen from '../../components/DefaultScreen'
import FastImage from 'react-native-fast-image'
import { Images } from '../../resources/Images'
import { responsiveHeight, responsiveWidth } from '../../constants/Constants'
import CInput from '../../components/CustomInput'
import PressableOpacity from '../../components/PressableOpacity'
import CButton from '../../components/CustomButton'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '../../resources/Colors'
import { Screens } from '../../routes'

type LoginProps = {
  navigation: any
}

const LoginScreen: React.FC<LoginProps> = (props: LoginProps) => {

  const [user, setUser] = useState({
    username: "",
    password: "",
  })

  const isUserEmpty = () => user.username === "" || user.password === ""
  const onLogin = () => props.navigation.push(Screens.home)

  const onChangeUsername = (text: string) => setUser({ ...user, username: text })
  const onChangePassword = (text: string) => setUser({ ...user, password: text })

  return (
    <DefaultScreen hideTop>
      <View style={styles.container}>
        <FastImage
          source={Images.statusbar_logo}
          style={styles.logo}
          resizeMode={"contain"}
        />
        <View style={styles.inputContainer}>
          <CInput
            placeholder='Kullanıcı Adı'
            containerStyle={styles.input}
            value={user.username}
            onChangeText={onChangeUsername}
          />
          <CInput
            secureTextEntry
            placeholder='Parola'
            containerStyle={styles.input}
            value={user.password}
            onChangeText={onChangePassword}
          />
          <PressableOpacity>
            <CText style={styles.forgetPassword}>
              Parolamı unuttum?
            </CText>
          </PressableOpacity>
        </View>
        <CButton
          disabled={isUserEmpty()}
          onPress={onLogin}
          text='Giriş Yap'
        />
        <PressableOpacity style={styles.facebookButton}>
          <Icon
            name='facebook'
            size={20}
            color={Colors.blue}
          />
          <CText style={styles.facebookText}>
            {" "}Facebook ile giriş yap
          </CText>
        </PressableOpacity>
      </View>
    </DefaultScreen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 12,
    marginTop: responsiveHeight(168)
  },
  logo: {
    height: responsiveHeight(49),
    width: responsiveWidth(182)
  },
  inputContainer: {
    marginTop: responsiveHeight(39),
    marginBottom: responsiveHeight(30),
  },
  input: {
    backgroundColor: Colors.backgrounWhite,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 5,
    marginBottom: responsiveHeight(10)
  },
  forgetPassword: {
    fontSize: 12,
    color: Colors.blue,
    fontWeight: "500",
    marginLeft: "auto",
    letterSpacing: 0.15
  },
  facebookButton: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: responsiveHeight(39)
  },
  facebookText: {
    fontSize: 14,
    color: Colors.blue,
    fontWeight: "600"
  }
})