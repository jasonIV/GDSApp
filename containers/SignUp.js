import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, KeyboardAvoidingView, View, Button } from 'react-native';
import logo from "../assets/fav.png"
import { signUp } from "../actions/authActions"

export default function SignUp ({ navigation }){
  const [name,onChangeName] = useState("")
  const [phone,onChangePhone] = useState("")
  const [password,onChangePassword] = useState("")

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

  return (
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"} 
        style={styles.container}>
        <Text style={styles.title}>GDS Sign Up</Text>
        <Image style={styles.logo} source={logo}/>
        <TextInput style={styles.textBox} textContentType="name" returnKeyType="done" placeholder="Username" placeholderTextColor="grey" value={name} onChangeText={name => onChangeName(name)}/>
        <TextInput style={styles.textBox} textContentType="telephoneNumber" keyboardType="number-pad" returnKeyType="done" placeholder="Phone" placeholderTextColor="grey" value={phone} onChangeText={phone => onChangePhone(phone)}/>
        <TextInput style={styles.textBox} textContentType="password" returnKeyType="done" secureTextEntry={true} placeholder="Password" placeholderTextColor="grey" value={password} onChangeText={password => onChangePassword(password)}/>
        <Button title="Sign Up" color="#ED2424" onPress={() => handleSignUp(name, phone, password)}/>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 25,
    color: "#ED2424",
  },
  logo: {
    margin: 10,
    width: 80,
    height: 80,
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
});

