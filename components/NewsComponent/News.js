import React from "react";
import { View, Text, Image ,TouchableOpacity } from "react-native";
import newsStyle from "./newsStyle";
import Icon from "react-native-vector-icons/FontAwesome";

export default function News({ news }) {
  return (
    <View>
      <TouchableOpacity style={newsStyle.cover}>
        <Icon name="share-alt" size={25} style={newsStyle.shareBtn} />
      </TouchableOpacity>
      <Image source={news.pic} style={newsStyle.img} />
      <View style={newsStyle.wrapper}>
        <View style={newsStyle.desc}>
          <Text style={newsStyle.title}>{news.title}</Text>
          <Text style={newsStyle.date}>{news.date} - 7mins read</Text>
        </View>
        <Icon name="ellipsis-h" size={25} style={newsStyle.icon} />
      </View>
    </View>
  );
}
