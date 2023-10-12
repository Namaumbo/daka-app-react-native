import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import settings from "./settingsStyles";

export default function Settings({ navigation }) {
  const settingContent = [
    {
      icon: "check",
      text: "Terms and Conditions",
      color: "yellow",
    },
    {
      icon: "question",
      text: "Help",
      color: "green",
    },
    {
      icon: "minus-square",
      text: "Delete Account",
      color: "tomato",
    },
    {
      icon: "info",
      text: "About App",
      color: "skyblue",
    },
    {
      icon: "book",
      text: "FAQ",
      color: "green",
    },
  ];

  
  const handleSignOut = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView>
      <View style={settings.personalMain}>
        <View style={settings.user}>
          <Icon name="user-circle" size={70}></Icon>
          <View>
            <Text style={settings.accountName}>John Doe</Text>
            <Text>emailexample@gmail.com</Text>
          </View>
        </View>
        <View>
          <Icon name="angle-right" size={20} color="grey" />
        </View>
      </View>

      <View style={settings.main}>
        {settingContent.map((setting) => {
          return (
            <>
              <View key={setting.icon} style={settings.cover}>
                <View style={settings.settingIconText}>
                  <Icon
                    name={setting.icon}
                    size={25}
                    color={setting.color}
                    style={settings.icon}
                  />
                  <View>
                    <Text style={settings.text}>{setting.text}</Text>
                  </View>
                </View>
                <View>
                  <Icon name="angle-right" size={20} color="grey" />
                </View>
              </View>
            </>
          );
        })}
        <View style={settings.btnCover}>
          <TouchableOpacity style={settings.btn} onPress={handleSignOut}>
            <Text style={settings.signOut}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
