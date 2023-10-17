import React from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import homeStyles from "./HomeStyle";
import News from "../../components/NewsComponent/News";
import TabNavigator from "../../TabNavigator";

const picture = require('../../assets/news.jpg')

export default function Home() {
  const newsDetails = [
    {
      pic: picture,
      title: "Daka company Ltd to reaach the sky soon",
      date: new Date().toLocaleDateString(),
    },
    {
      pic: picture,
      title: "Daka space Ltd",
      date: new Date().toLocaleDateString(),
    },
    {
      pic: picture,
      title: "Government to shine on the newest technology",
      date: new Date().toLocaleDateString(),
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <TabNavigator/>
      {/* <View>
        <View style={homeStyles.inputWrapper}>
          <TextInput
            placeholder="search news headline"
            style={homeStyles.input}
          />
        </View>
        <ScrollView  style={homeStyles.ScrollView}>
        <View style={homeStyles.newsWrapper}>
            {newsDetails.map((news, index) => {
              return (
                <View key={news.title}>
                  <News news={news} />
                </View>
              );
            })}
        </View>
        </ScrollView>

      </View> */}
    </SafeAreaView>
  );
}
