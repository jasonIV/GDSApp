import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, Image, View, Button } from 'react-native';
import { connect } from "react-redux";
import logo from "../assets/fav.png"
import { signIn } from "../actions/authActions"

function Login(props) {

  const { loading, err, navigation } = props;
  const [phone,onChangePhone] = useState("")
  const [password,onChangePassword] = useState("")

  const handleSignIn = (phone, password) => {
    props.signIn(phone,password)
  }

  const handleSignUp = () => {
    navigation.navigate("Sign Up")
  }

  return (
    <>
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"} 
        style={styles.container} >
        <Text style={styles.title}>GDS Sign In</Text>
        <Image style={styles.logo} source={logo}/>
        <TextInput style={styles.textBox} textContentType="telephoneNumber" keyboardType="number-pad" returnKeyType="done" placeholder="Phone" placeholderTextColor="grey" value={phone} onChangeText={phone => onChangePhone(phone)}/>
        <TextInput style={styles.textBox} textContentType="password" returnKeyType="done" secureTextEntry={true} placeholder="Password" placeholderTextColor="grey" value={password} onChangeText={password => onChangePassword(password)}/>
        { err && 
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{props.err}</Text> 
          </View>
        }
        { loading ? 
          <Button title="Loading..." color="#ED2424" />
            :
          <Button title="Sign In" color="#ED2424" onPress={() => handleSignIn(phone,password)} />
        }
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{paddingTop: 5, color: "#ED2424", fontSize: 16}}>Don't have an account? Sign up here.</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Text style={styles.footerText} >GDS Application Version 1.0.0</Text>
      </View>
    </>
  );
}

const mapStateToProps = store => {
  return {
    err: store.auth.err,
    loading: store.auth.isLoading,
  }
}

export default connect(mapStateToProps, { signIn })(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
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
  },
  footer: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  footerText: {
    fontSize: 12,
    color: "gray"
  }
});
