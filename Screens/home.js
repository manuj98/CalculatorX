import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.opertaionContainer}></ScrollView>
      <View style={styles.keyContainer}>
        <View style={styles.keyRow}>
          <TouchableOpacity style={[styles.button, styles.buttonGray]}>
            <Text style={[styles.keyText, styles.keyWhite]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonGray]}>
            <FontAwesome name="percent" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonGray]}>
            <Text style={[styles.keyText, styles.keyWhite]}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
            <FontAwesome5 name="divide" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
            <Text style={[styles.keyText, styles.keyWhite]}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
            <Text style={[styles.keyText, styles.keyWhite]}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
            <Text style={[styles.keyText, styles.keyWhite]}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Feather name="delete" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
            <Text style={[styles.keyText, styles.keyWhite]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
 
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  opertaionContainer: {
    backgroundColor: "white",
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    opacity: 0.1,
  },
  keyContainer: {},
  keyRow: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#fff",
    margin: 7,
    width: 65,
    height: undefined,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderRadius: 65 / 2,
  },
  keyText: {
    fontSize: 25,
    fontWeight: "900",
    color: "#000",
  },
  buttonGray: {
    backgroundColor: "#35374B",
  },
  keyWhite: {
    color: "#F0F3FF",
  },
  buttonBlue: {
    backgroundColor: "#387ADF",
  },
});
