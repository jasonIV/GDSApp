import React,{ useEffect }from 'react';
import { connect } from "react-redux";
import { FlatList, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { fetchUserData } from "../actions/dashboardActions.js";

function History(props) {
  
  const { route, navigation, transactions, loading } = props;
  const { phone } = route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     props.fetchUserData(phone)
    })
    return unsubscribe;
  },[navigation])


  return(
    <SafeAreaView style={styles.historyContainer}>
      {loading ? 
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 20}}>Loading...</Text>
        </View>
        :
        <>
        {transactions.length > 0 ?
          <FlatList
            data={transactions.slice(0).reverse()}
            renderItem={({item}) => <Item item={item} /> }
            keyExtractor={item => item.trans_id}
          />
          :
          <View style={{alignItems: "center"}}>
            <Text style={{fontSize: 20}}>Your history is empty.</Text>
          </View>
        }
        </>
      }
    </SafeAreaView>
  )
}

const mapStateToProps = store => {
  return{
    transactions: store.dashboard.transactions,
    loading: store.dashboard.loading,
  }
}

export default connect(mapStateToProps, { fetchUserData })(History)

function Item({item}) {
  return(
    <View style={styles.historyBorder}>
      <View style={styles.historyItem}>
        <Text style={styles.itemText} >{item.trans_id}</Text>
        <Text style={styles.itemText} >{item.user_agent}</Text>
      </View>
      <View style={styles.historyItem}>
        <Text style={styles.itemText} >{item.name_}</Text>
        <Text style={styles.itemText} >{item.phone}</Text>
      </View>
      <View style={styles.historyItem}>
        <Text style={styles.itemText} >{item.price} MMK</Text>
        <Text style={styles.itemText} >{item.question_type}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  historyBorder: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ED2424",
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  itemText: {
    fontSize: 16
  },
  footer: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  footerText: {
    fontSize: 12,
    color: "gray"
  }
})
