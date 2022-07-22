import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import CText from '../../components/CustomText'
import DefaultScreen from '../../components/DefaultScreen'
import FastImage from 'react-native-fast-image'
import { Images } from '../../resources/Images'
import { responsiveHeight } from '../../constants/Constants'
import CInput from '../../components/CustomInput'
import PressableOpacity from '../../components/PressableOpacity'
import CButton from '../../components/CustomButton'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '../../resources/Colors'
import { Screens } from '../../routes'

type LoginProps = {
  navigation:any
}

const LoginScreen: React.FC<LoginProps> = (props: LoginProps) => {

  const [user, setUser] = useState({
    username: "",
    password: "",
  })

  const isUserEmpty = () => user.username === "" || user.password === ""
  const onLogin = () => props.navigation.push(Screens.home)
  
  return (
    <DefaultScreen hideTop>
      <View style={{ alignItems: "center", padding: 12, marginTop: 168 }}>
        <FastImage
          source={Images.statusbar_logo}
          style={styles.logo}
          resizeMode={"contain"}
        />
        <View style={{ marginTop: responsiveHeight(39), marginBottom: responsiveHeight(30) }}>
          <CInput placeholder='Kullanıcı Adı' containerStyle={styles.input} value={user.username} onChangeText={text => setUser({ ...user, username: text })} />
          <CInput secureTextEntry placeholder='Parola' containerStyle={styles.input} value={user.password} onChangeText={text => setUser({ ...user, password: text })} />
          <PressableOpacity>
            <CText style={{ fontSize: 12, color: Colors.blue, fontWeight: "500", marginLeft: "auto", letterSpacing: 0.15 }}>
              Parolamı unuttum?
            </CText>
          </PressableOpacity>
        </View>
        <CButton disabled={isUserEmpty()} onPress={onLogin} text='Giriş Yap' />
        <PressableOpacity
          style={{alignItems:"center",flexDirection:"row",marginTop:responsiveHeight(39)}}
        >
          <Icon name='facebook' size={20} color={Colors.blue} />
          <CText style={{ fontSize: 14, color:Colors.blue, fontWeight:"600" }}>
            {" "}Facebook ile giriş yap
          </CText>
        </PressableOpacity>
      </View>
    </DefaultScreen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logo: {
    height: responsiveHeight(49),
    width: 182
  },
  input: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#D0D5D9",
    borderRadius: 5,
    marginBottom: 10
  }
})