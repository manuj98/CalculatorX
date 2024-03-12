import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React from "react";
import { useState } from "react";
import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get('window').width;

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [bracketOpen, setBracketOpen] = useState(false);

  const handlePress = (val) => {
    console.log("I am pressed", val);

    if (val == "AC") {
      setDisplayText("0");

    } else if (val == "=") {
        try{
          if( ( displayText.match(/\(/g) || [] ).length == ( displayText.match(/\)/g) || [] ).length){ //matching brackets
          
            if(displayText.slice(-1) == "+" ||
            displayText.slice(-1) == "-" ||
            displayText.slice(-1) == "*" ||
            displayText.slice(-1) == "/" ||
            displayText.slice(-1) == "%"){//evaluating without last char and replacing occurence of () and ('0')
                  setDisplayText(`${eval(displayText.replace('()', '(0)')).slice(-1)}`)
            }else{
              setDisplayText(`${eval(displayText.replace('()', '(0)'))}`)
            }

          }else{
            console.log('brackets not matching');
          }
        }
        catch(e){
          setDisplayText('Format error')
        }
    } else if (val == "del") {
      setDisplayText(displayText.slice(0,-1))

    } else if (val == "bracket") {
      if(displayText=='0'){
        setDisplayText('(')
        setBracketOpen(true)
      }else if ( displayText.slice(-1) == "+" ||
      displayText.slice(-1) == "-" ||
      displayText.slice(-1) == "*" ||
      displayText.slice(-1) == "/" ||
      displayText.slice(-1) == "%"){
        setDisplayText(displayText + '(');
        setBracketOpen(true);
      }else{
           if(bracketOpen==true){
          setDisplayText(displayText+ ')');
          setBracketOpen(false)
        }else{//for numbers
          setDisplayText(displayText+ '(');
          setBracketOpen(true)
        }
          
      }
    } else {
      if (displayText == "0") {
        if (
          val == "+" ||
          val == "-" ||
          val == "*" ||
          val == "/" ||
          val == "%"
        ) {
          setDisplayText(displayText + val); // to have operation for ex: 0+5
        } else {
          setDisplayText(val); //to avoid num for ex: 08
        }
      } else if (isNaN(val)) { //handling operators
        console.log(displayText.slice(-1));
        if (
          displayText.slice(-1) == "+" ||
          displayText.slice(-1) == "-" ||
          displayText.slice(-1) == "*" ||
          displayText.slice(-1) == "/" ||
          displayText.slice(-1) == "%"
        ) { console.log('hi');
          setDisplayText(displayText.slice(0,-1) + val); //to avoid for ex: +-
        } else {
          setDisplayText(displayText + val);
        }
      }else{
        setDisplayText(displayText + val);
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.opertaionContainer} ref={ref => this.scrollView = ref}
      onContentSizeChange={(contentWidth, contentHeight)=>{
      this.scrollView.scrollToEnd({animated:true})}}>
        <Text style={styles.displayTexts}>{displayText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
      </ScrollView>

      <View style={styles.keyContainer}>
        <View style={styles.keyRow}>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handlePress("AC")}
          >
            <Text style={[styles.keyText, styles.keyWhite]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handlePress("%")}
          >
            <FontAwesome name="percent" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonGray]}
            onPress={() => handlePress("bracket")}
          >
            <Text style={[styles.keyText, styles.keyWhite]}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonBlue]}
            onPress={() => handlePress("/")}
          >
            <FontAwesome5 name="divide" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("7")}
          >
            <Text style={styles.keyText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("8")}
          >
            <Text style={styles.keyText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("9")}
          >
            <Text style={styles.keyText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonBlue]}
            onPress={() => handlePress("*")}
          >
            <Text style={[styles.keyText, styles.keyWhite]}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("4")}
          >
            <Text style={styles.keyText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("5")}
          >
            <Text style={styles.keyText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("6")}
          >
            <Text style={styles.keyText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonBlue]}
            onPress={() => handlePress("-")}
          >
            <Text style={[styles.keyText, styles.keyWhite]}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("1")}
          >
            <Text style={styles.keyText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("2")}
          >
            <Text style={styles.keyText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("3")}
          >
            <Text style={styles.keyText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonBlue]}
            onPress={() => handlePress("+")}
          >
            <Text style={[styles.keyText, styles.keyWhite]}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keyRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(".")}
          >
            <Text style={styles.keyText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("0")}
          >
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("del")}
          >
            <Feather name="delete" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonBlue]}
            onPress={() => {
              handlePress("=");
            }}
          >
            <Text style={[styles.keyText, styles.keyWhite]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
  },
  opertaionContainer: {
    backgroundColor: "white",
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    width: windowWidth-50
  },
  displayTexts: {
    fontSize: 40,
    padding: 5
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
