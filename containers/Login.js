import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, Image, View, Button } from 'react-native';
import { connect } from "react-redux";
import logo from "../images/fav.png"
import { signIn } from "../actions/authActions"

function Login(props) {

  const { navigation } = props;
  const [phone,onChangePhone] = useState("")
  const [password,onChangePassword] = useState("")
  const [justifyContent, setContent] = useState('center')
  const [padding, setPadding] = useState(0)

  const handleSignIn = (phone, password) => {
    props.signIn(phone,password)
  }

  const storeData = async(phone) => {
    try{
      await AsyncStorage.setItem(
        "phoneKey",
        phone
      )
    }
    catch(err){
      console.log(error)
    }
  }

  const handleSignUp = () => {
    navigation.navigate("Sign Up")
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
        <Text style={styles.title}>GDS Sign In</Text>
        <Image style={styles.logo} source={logo}/>
        <TextInput style={styles.textBox} onFocus={onFocus} onBlur={onBlur} textContentType="telephoneNumber" returnKeyType="done" placeholder="Phone" placeholderTextColor="grey" value={phone} onChangeText={phone => onChangePhone(phone)}/>
        <TextInput style={styles.textBox} onFocus={onFocus} onBlur={onBlur} textContentType="password" returnKeyType="done" secureTextEntry={true} placeholder="Password" placeholderTextColor="grey" value={password} onChangeText={password => onChangePassword(password)}/>
        { props.err && 
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{props.err}</Text> 
          </View>
        }
        <View style={styles.btnSignIn}>
          <Button title="Sign In" color="#ED2424" onPress={() => handleSignIn(phone,password)} />
        </View>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{color: "#ED2424", fontSize: 16}}>Don't have an account? Sign up here.</Text>
        </TouchableOpacity>
      </View>
  );
}

const mapStateToProps = store => {
  return {
    err: store.auth.err,
  }
}

export default connect(mapStateToProps, { signIn })(Login);

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
  btnSignIn: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: "auto",
    height: "auto",
    borderWidth: 1,
    borderColor: "#ED2424",
    borderRadius: 40,
  },
  errorContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ffcccc",
    borderWidth: 1,
    borderColor: "#ED2424",
    borderRadius: 40,
  },
  error: {
    fontSize: 20,
    color: "#ED2424",
  }
});
