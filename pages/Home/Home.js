import React from "react";
import { SafeAreaView} from "react-native";
import homeStyles from "./HomeStyle";

import TabNavigator from "../../TabNavigator";



export default function Home() {
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <TabNavigator/>

    </SafeAreaView>
  );
}
