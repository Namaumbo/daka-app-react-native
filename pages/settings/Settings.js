import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontIcon from "react-native-vector-icons/FontAwesome"
import settings from "./settingsStyles";

export default function Settings({ navigation }) {
  const settingContent = [
    {
      id: "fdwr-dfdsg-sgs",
      icon: "checkcircle",
      text: "Terms and Conditions",
      color: "skyblue",
    },
    {
      id: "dgss-dfdfsdga-xxsd",
      icon: "questioncircle",
      text: "Help",
      color: "skyblue",
    },
    {
      id: "dgs-ftew-zzz",
      icon: "minuscircle",
      text: "Delete Account",
      color: "tomato",
    },
    {
      id: "fwwer-dfdsg-dsfsdb",
      icon: "infocirlce",
      text: "About App",
      color: "skyblue",
    },
    {
      id: "tfhbc-dfdsg-ddre6",
      icon: "book",
      text: "FAQ",
      color: "skyblue",
    },
  ];

  const handleSignOut = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView>
      <View style={settings.personalMain}>
        <View style={settings.user}>
          <FontIcon name="user-circle" size={80}/>
          <View>
            <Text style={settings.accountName}>John Doe</Text>
            <Text>emailexample@gmail.com</Text>
          </View>
        </View>
        <View>
          <Icon name="right" size={20} color="grey" />
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
                <Icon name="right" size={20} color="grey" />
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
