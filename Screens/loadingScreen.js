import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React from "react";

import { SimpleLineIcons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height

const loadingScreen = () => {
   
  return (
    <SafeAreaView>
    <View style={styles.logoContainer}>
    <SimpleLineIcons name="calculator" size={105} color="#78A083" />
      <Text style={styles.brandName}>CalculatorX</Text>
    </View>
    </SafeAreaView>
  );
};

export default loadingScreen;

const styles = StyleSheet.create({

    logoContainer:{
        //backgroundColor: 'blue',
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandName:{
        color: "#35374B",
        fontWeight: '900',
        fontSize: 20,
        marginTop:3
    }
});
