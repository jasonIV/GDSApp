import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, Button } from 'react-native';
import logo from "../assets/fav.png"
import { signUp } from "../actions/authActions"

export default function SignUp ({ navigation }){
  const [name,onChangeName] = useState("")
  const [phone,onChangePhone] = useState("")
  const [password,onChangePassword] = useState("")
  const [justifyContent, setContent] = useState('center')
  const [padding, setPadding] = useState(0)

  const handleSignUp = (name, phone, password) => {
    signUp(name,phone,password)
      .then(json => {
        if(json.isSignedUp){
          alert("Signed up successfully.")
          navigation.navigate("Login")
        }
        else {
          alert("Sign up unsuccessful.")
        }
      })
    .catch(err => console.log(err))
  }

  const onFocus = () => {
    setContent("flex-start")
    setPadding(20)
  }

  const onBlur = () => {
    setContent("center")
    setPadding(0)
  }

  return (
      <View style={[styles.container, { justifyContent: justifyContent, padding: padding }]}>
        <Text style={styles.title}>GDS Sign Up</Text>
        <Image style={styles.logo} source={logo}/>
        <TextInput style={styles.textBox} onFocus={onFocus} onBlur={onBlur} textContentType="name" returnKeyType="done" placeholder="Username" placeholderTextColor="grey" value={name} onChangeText={name => onChangeName(name)}/>
        <TextInput style={styles.textBox} onFocus={onFocus} onBlur={onBlur} textContentType="telephoneNumber" returnKeyType="done" placeholder="Phone" placeholderTextColor="grey" value={phone} onChangeText={phone => onChangePhone(phone)}/>
        <TextInput style={styles.textBox} onFocus={onFocus} onBlur={onBlur} textContentType="password" returnKeyType="done" secureTextEntry={true} placeholder="Password" placeholderTextColor="grey" value={password} onChangeText={password => onChangePassword(password)}/>
        <View style={styles.btnSignUp}>
          <Button title="Sign Up" color="#FFF" onPress={() => handleSignUp(phone, password)}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 30,
    color: "#ED2424",
  },
  logo: {
    margin: 10,
    width: 100,
    height: 100,
    borderColor: "#ED2424",
    borderWidth: 1,
    borderRadius: 100,
  },
  textBox: {
    margin: 10,
    padding: 5,
    width: 200,
    height: 40,
    backgroundColor: "white",
    borderColor: "#ED2424",
    borderWidth: 1,
    borderRadius: 40,
  },
  btnSignUp: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: "auto",
    height: "auto",
    backgroundColor: "#ED2424",
    borderRadius: 40,
  },
});

