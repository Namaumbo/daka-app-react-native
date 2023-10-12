import React from "react";
import welcomeStyles from "./WelcomeStyles.ts";
import { View, Text, ImageBackground ,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Welcome({navigation}) {
  const backgroundImage = "../../assets/spacebg.jpg";

  const handle  = () => {
    navigation.navigate('Login');

  }

  return (
    <SafeAreaView style={welcomeStyles.container}>
      <StatusBar style="auto" />
      <View>
        <ImageBackground
          source={require("../../assets/spacebg.jpg")}
          style={welcomeStyles.image}
        >
          <View style={welcomeStyles.textCon}>
            <Text style={welcomeStyles.text}>Daka Space Technologies</Text>
            <Text style={welcomeStyles.textSub}>Reaching for the stars</Text>
            <TouchableOpacity style={welcomeStyles.btn} onPress={handle}>
              <Text style={welcomeStyles.textSub}>Get started</Text>
            </TouchableOpacity>
          </View>
        
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
