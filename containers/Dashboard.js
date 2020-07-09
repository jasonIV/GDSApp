import React,{ useEffect } from 'react';
import { connect } from "react-redux";
import { Linking, FlatList, StyleSheet, View, Text, Button } from 'react-native';
import { fetchUserData, fetchUrl } from "../actions/dashboardActions.js";
import { signOut } from "../actions/authActions"

function Dashboard(props){
  const { phone, username, balance, transactions, url, navigation } = props;

  useEffect(() => {
   props.fetchUserData(phone)
  },[])

  // const handleBayDin = () => {
  //   props.fetchUrl(phone)
  // }

  const handleHistory = () => {
    navigation.navigate("History", {transactions})
  }

  const handleSignOut = () => {
    props.signOut();
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
          <Button title="History" color="#ED2424" onPress={handleHistory} />
        </View>
        <View style={styles.buttonContainer} > 
          <Button title="Sign Out" color="#ED2424" onPress={handleSignOut} />
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = store => {
  return{
    phone: store.auth.phone,
    username: store.dashboard.username,
    balance: store.dashboard.balance,
    transactions: store.dashboard.transactions,
    url: store.dashboard.url,
    loading: store.dashboard.loading,
    err: store.dashboard.err,
  }
}

export default connect(mapStateToProps, { signOut, fetchUserData, fetchUrl })(Dashboard)

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
  }
})
