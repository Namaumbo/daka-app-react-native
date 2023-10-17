import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View ,Image, Alert } from "react-native";
import signUp from "./signUpStyles";
import Checkbox from "expo-checkbox";

export default function SignUp({navigation}) {
    const [isChecked, setChecked] = useState(false);
    const logo = require("../../assets/dstlogo.png")

    const handleSignUp = () =>{
        Alert.alert('sign up successfully')
        setTimeout(() => {
            navigation.navigate('Login')
        },1500)
    }
  return (
    <View style={signUp.main}>
    <Image
        source={logo}
        style={signUp.logo}
    />
      <TextInput placeholder="Full Name" style={signUp.input} />
      <TextInput placeholder="Email" style={signUp.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={signUp.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={signUp.input}
      />
      <View style={signUp.checkWrapper}>
      <Checkbox
        style={signUp.checkbox}
        value={isChecked}
        onValueChange={setChecked}
      /><Text>Agree to Terms and Conditions</Text>
      </View>

      <TouchableOpacity style={signUp.btn} onPress={handleSignUp}>
        <Text style={signUp.text}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}
