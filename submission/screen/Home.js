import { View, Text, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonComponent from "../component/buttonComponent";
import React, { useState, useEffect } from "react";
export default function Home() {
  const [forYouSelected, setForYouSelected] = useState(false);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.upperNavigationComponent}>
        <Text style={styles.timer}>Time</Text>
        <View style={{ flexDirection: "row", flex: 8 }}>
          <View
            style={
              forYouSelected
                ? [styles.button]
                : [styles.button, styles.buttonBottomLine]
            }
          >
            <Button
              title="Following"
              color="white"
              onPress={() => {
                setForYouSelected(false);
              }}
            ></Button>
          </View>
          <View
            style={
              forYouSelected
                ? [styles.button, styles.buttonBottomLine]
                : [styles.button]
            }
          >
            <Button
              title="For you"
              color="white"
              onPress={() => {
                setForYouSelected(true);
              }}
            ></Button>
          </View>
        </View>
        <Ionicons
          style={styles.searchIcon}
          name="search"
          size={28}
          color="#000"
        />
      </View>
      <View
        style={{
          flexDirection: "column-reverse",
          backgroundColor: "#002633",
          flex: 1,
          alignItems: "flex-end",
          paddingBottom: "32%",
        }}
      >
        <ButtonComponent name="Flip" iconName="camera-flip-outline" />
        <ButtonComponent name="Bookmark" iconName="bookmark" />
        <ButtonComponent name="Share" iconName="share" />
        <ButtonComponent name="Comment" iconName="comment" />
        <ButtonComponent name="Likes" iconName="heart" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  upperNavigationComponent: {
    flexDirection: "row",
    paddingTop: 24,
    paddingHorizontal: 8,
    padding: 24,
    flex: 0.1,
    justifyContent: "space-between",
    backgroundColor: "#002633",
  },
  searchIcon: {
    paddingTop: 10,
    color: "white",
  },
  icon: {
    paddingTop: 10,
    paddingLeft: 20,
    color: "white",
    justifyContent: "center",
  },
  timer: {
    marginTop: 16,
    color: "white",
  },
  button: {
    color: "white",
    flex: 1,
    width: "30%",
    marginHorizontal: 16,
    marginTop: 8,
    height: 40,
  },
  buttonBottomLine: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 20,
  },
});
