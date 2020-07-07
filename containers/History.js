import React from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { fetchUserData } from "../actions/dashboardActions.js";

export default function History({ route, navigation }) {

  const { transactions } = route.params;

  return(
    <SafeAreaView style={styles.historyContainer}>
      {isEmpty(transactions) ? 
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 20}}>Your history is empty.</Text>
        </View>
        :
        <FlatList
          data={transactions.slice(0).reverse()}
          renderItem={({item}) => <Item item={item} /> }
          keyExtractor={item => item.trans_id}
        />
      }
    </SafeAreaView>
  )
}

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

const isEmpty = (arr) => {
  if(arr.length){
    return false;
  }
  return true;
}

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    justifyContent: "center"
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
})
