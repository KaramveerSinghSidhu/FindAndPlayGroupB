import React from "react";
import {
  Button,
  InputEvent,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableOpacityBase,
} from "react-native";

//This component is used to calculate the dimensions of the device and set width of certain components accordingly e.g input box
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

function CreateGame({ navigation }) {
  return (
    <ImageBackground
      style={{ resizeMode: "contain", flex: 1 }}
      source={require("../assets/BGs/background2.png")}
    >
      <Image
        source={require("../assets/icons/Settings.png")}
        style={{
          width: 150,
          height: 150,
          position: "absolute",
          top: 80,
          right: 50,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("SigninScreen")}
        style={{
          width: 250,
          height: 250,
          position: "absolute",
          top: 80,
          left: 50,
        }}
      >
        <Image source={require("../assets/icons/Logout.png")} style={{
          width: 150,
          height: 150,
          position: "absolute",
          top: 5,
          
        }}/>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            position: "absolute",
            top: 220,
            left: 220,
            color: "#fff",
            textShadowColor: "rgba(0, 0, 0, 1)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Create Game
        </Text>
      </View>

      <Image
        source={require("../assets/icons/Profile.png")}
        style={{
          width: 150,
          height: 150,
          position: "absolute",
          top: 1000,
          left: 50,
        }}
      />

      <Image
        source={require("../assets/icons/Play.png")}
        style={{
          width: 150,
          height: 150,
          position: "absolute",
          top: 1000,
          right: 330,
        }}
      />

      <Image
        source={require("../assets/icons/Feed.png")}
        style={{
          width: 150,
          height: 150,
          position: "absolute",
          top: 1000,
          right: 50,
        }}
      />

      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Title"
        placeholderTextColor="#fff"
        autoCapitalize="none"
        style={{
          position: "absolute",
          top: 340,
          borderWidth: 3,
          // width: 350,
          width: width * 0.6,
          alignItems: "center",
          textAlign: "center",
          padding: 12,
          left: 160,
          fontSize: 30,
          borderRadius: 20,
          fontSize: 20,
          borderRadius: 20,
          borderColor: "#fff",
          borderRadius: 20,
          color: "#fff",
        }}
      />

      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Category"
        placeholderTextColor="#fff"
        autoCapitalize="none"
        style={{
          position: "absolute",
          top: 440,
          borderWidth: 3,
          width: width * 0.6,
          alignItems: "center",
          textAlign: "center",
          padding: 12,
          left: 160,
          fontSize: 20,
          borderRadius: 20,
          borderColor: "#fff",
          borderRadius: 20,
          color: "#fff",
        }}
      />

      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Time Limit"
        placeholderTextColor="#fff"
        autoCapitalize="none"
        style={{
          position: "absolute",
          top: 540,
          borderWidth: 3,
          // width: 350,
          width: width * 0.6,
          alignItems: "center",
          textAlign: "center",
          padding: 12,
          left: 160,
          fontSize: 30,
          borderRadius: 20,
          fontSize: 20,
          borderRadius: 20,
          borderColor: "#fff",
          borderRadius: 20,
          color: "#fff",
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 700,
          left: 160,
          borderColor: "black",
          width: 300,
          zIndex: 3,
          fontSize: 20,
        }}
      >
        <TouchableOpacity activeOpacity={0.95} style={styles.button}>
          <Text style={styles.text}>HOST</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Difficulty"
        placeholderTextColor="#fff"
        autoCapitalize="none"
        style={{
          position: "absolute",
          top: 640,
          borderWidth: 3,
          width: width * 0.6,
          alignItems: "center",
          textAlign: "center",
          padding: 12,
          left: 160,
          fontSize: 30,
          borderRadius: 20,
          fontSize: 20,
          borderRadius: 20,
          borderColor: "#fff",
          borderRadius: 20,
          color: "#fff",
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 200,
  },
  texts: {
    fontSize: 30,
  },

  button: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "lightblue",
    borderRadius: 20,
    width: width * 0.6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    elevation: 3,
    backgroundColor: "#50A4FF",
  },
  button2: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "lightblue",
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  logoutBtnContainer: {
    zIndex: 999,
    position: "absolute",
    top: 65,
    left: 30,
    alignItems: "center",
    backgroundColor: "#FFE551",
    padding: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

export default CreateGame;
