import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./LoginStyles";

export default function Login({navigation}) {

  
  const logo = require("../../assets/dstlogo.png");


  const handleLogin = () => {
    navigation.navigate('Home')

  }
  return (
    <View View style={styles.container}>
    <StatusBar style="auto" />
      <View>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <View>
        <TextInput style={styles.emailInput} placeholder="email"></TextInput>
        <TextInput
          style={styles.passwordInput}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.forgotPasswordText}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sinUpText}>
        <Text>
          Don't have an account yet?{" "}
            <Text style={styles.signUp}>SIGN UP</Text>
        </Text>
      </View>
    </View>
  );
}
