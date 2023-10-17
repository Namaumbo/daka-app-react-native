import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import settings from "./settingsStyles";

export default function Settings({ navigation }) {
  const settingContent = [
    {
      id: "fdwr-dfdsg-sgs",
      icon: "check-circle",
      text: "Terms and Conditions",
      color: "tomato",
    },
    {
      id: "dgss-dfdfsdga-xxsd",
      icon: "question-circle",
      text: "Help",
      color: "tomato",
    },
    {
      id: "dgs-ftew-zzz",
      icon: "minus-circle",
      text: "Delete Account",
      color: "tomato",
    },
    {
      id: "fwwer-dfdsg-dsfsdb",
      icon: "info-circle",
      text: "About App",
      color: "tomato",
    },
    {
      id: "tfhbc-dfdsg-ddre6",
      icon: "book",
      text: "FAQ",
      color: "tomato",
    },
  ];

  const handleSignOut = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView>
      <View style={settings.personalMain}>
        <View style={settings.user}>
          <Icon name="user-circle" size={80}></Icon>
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
            <View style={settings.cover} key={setting.id}>
              <View style={settings.settingIconText}>
                <Icon
                  name={setting.icon}
                  size={30}
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
