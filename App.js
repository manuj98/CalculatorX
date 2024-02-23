import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react"

//screens
import LoadingScreen from './Screens/loadingScreen'

export default function App() {

  const [loading, setLoading]= useState(true)

  useEffect(()=>{
      setTimeout(() => {
          setLoading(false)
      }, 3000);
  }, [])
  if(loading){
      return(<LoadingScreen/>)
  }

  return (
    <View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
