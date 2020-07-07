import React from "react"
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Login from "./containers/Login"
import Dashboard from "./containers/Dashboard"
import SignUp from "./containers/SignUp"
import History_ from "./containers/History"

const Stack = createStackNavigator();

enableScreens(); //Memory Optimization

function AppNavigator(props){
  const { auth } = props;
  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={header} >
          {auth? (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="History" component={History_} />
            </>
            )
          :
            (
            <>
              <Stack.Screen name="Login" component={Login} /> 
              <Stack.Screen name="Sign Up" component={SignUp} />
            </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const mapStateToProps = store => {
  return {
    auth: store.auth.isSignedIn,
  }
}

export default connect(mapStateToProps,null)(AppNavigator)

const header = {
  headerStyle: {
    backgroundColor: "#ED2424"
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
