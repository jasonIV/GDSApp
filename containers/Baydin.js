import React, { useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { WebView } from "react-native-webview";
import { fetchUrl } from "../actions/baydinActions";

function Baydin(props){

  const { phone, url, err, navigation } = props;

  console.log(url)

  useEffect(() => {
    props.fetchUrl(phone);
  },[])

  return(
    <>
    {err && <Text style={{color: "red"}}>err</Text>}
    {url ?
      <WebView source={{uri: url}} />
      :
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    }
    </>
  )
}

const mapStateToProps = store => {
  return{
    phone: store.auth.phone,
    url: store.baydin.url,
    err: store.baydin.err
  }
}

export default connect(mapStateToProps, { fetchUrl })(Baydin)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})
