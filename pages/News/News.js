import React from "react";
import { View, Text, TextInput } from "react-native";
import News from "../../components/NewsComponent/NewsComponent";
import { ScrollView } from "react-native-gesture-handler";
import homeStyles from "../Home/HomeStyle";

export default function NewsPage() {
  const picture = require("../../assets/news.jpg");
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
    <>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          placeholder="search news headline"
          style={homeStyles.input}
        />
      </View>
      <ScrollView style={homeStyles.ScrollView}>
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
    </>
  );
}
