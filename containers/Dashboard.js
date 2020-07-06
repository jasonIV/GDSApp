import React,{ useEffect, useState } from 'react';
import { AsyncStorage, Linking, FlatList, StyleSheet, View, Text, Button } from 'react-native';
import { fetchUserData, fetchUrl } from "../actions/dashboardActions.js";

export default function Dashboard({ navigation }){

  const [username, setUsername] = useState("")
  const [balance, setBalance] = useState(null)

  const fetchData = async() => {
    try{
      const phoneKey = await AsyncStorage.getItem("phoneKey")
      return phoneKey;
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
   fetchData()
   .then(res =>
     fetchUserData(res)
     .then(res => {
        setUsername(res.Item.username)
        setBalance(res.Item.gds_balance)
      })
     .catch(err => console.log(err))
   )
   .catch(err => console.log(err))
  },[])

  const handleBayDin = () => {
    fetchData()
    .then(res => 
      fetchUrl(res)
      .then(res => Linking.openURL(res))
      .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
  }
  const handleHistory = () => {
    navigation.navigate("History")
  }

  const handleSignOut = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.userData} >
        <View style={styles.header}>
          <Text style={styles.headerText}>Username</Text> 
         <Text style={styles.headerText}>MMK</Text> 
        </View>
        <View style={styles.body}>
          {username?
            <Text style={styles.bodyText}>{username}</Text> 
            :
            <Text style={styles.bodyText}>loading</Text> 
          }
          {balance? 
            <Text style={styles.bodyText}>{balance}</Text> 
            :
            <Text style={styles.bodyText}>0</Text> 
          }
        </View>
      </View>
      <View style={styles.buttonRow}> 
        <View style={styles.buttonContainer} > 
          <Button title="Ask Baydin" color="#ED2424" onPress={handleBayDin} />
        </View>
        <View style={styles.buttonContainer} > 
          <Button title="History" color="#ED2424" onPress={handleHistory} />
        </View>
        <View style={styles.buttonContainer} > 
          <Button title="Sign Out" color="#ED2424" onPress={handleSignOut} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start" ,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  userData: {
    width: "90%",
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: "#ED2424",
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "grey"
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyText: {
    fontSize: 20,
  },
  buttonRow: {
    height: "auto",
    flexDirection: "row",
    padding: 10,
  },
  buttonContainer: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ED2424",
    borderRadius: 30,
  }
})
