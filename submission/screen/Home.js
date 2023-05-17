import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import FollowingYou from "../component/FollowingYou";
import ForYou from "../component/ForYou";

export default function Home() {
  const [forYouSelected, setForYouSelected] = useState(false);
  const [isFlip, setIsFlip] = useState(false);

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
      <View style={styles.mainContent}>
        {forYouSelected ? <ForYou /> : <FollowingYou isFlip={isFlip} />}
      </View>
      <View
        style={{
          flexDirection: "column-reverse",
          alignItems: "flex-end",
          paddingBottom: "32%",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            if (isFlip) {
              setIsFlip(false);
            } else {
              setIsFlip(true);
            }
          }}
        >
          <View style={styles.iconStyling}>
            <Ionicons
              style={styles.icon}
              name={"Flip"}
              size={28}
              color="#000"
            />
          </View>
          <Text style={styles.buttonTextStyle}>{"Flip"}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.iconStyling}>
            <Ionicons
              style={styles.icon}
              name={"bookmark"}
              size={28}
              color="#000"
            />
          </View>
          <Text style={styles.buttonTextStyle}>{"Bookmark"}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.iconStyling}>
            <Ionicons
              style={styles.icon}
              name={"share"}
              size={28}
              color="#000"
            />
          </View>
          <Text style={styles.buttonTextStyle}>{"Share"}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.iconStyling}>
            <Ionicons
              style={styles.icon}
              name={"comment"}
              size={28}
              color="#000"
            />
          </View>
          <Text style={styles.buttonTextStyle}>{"Comment"}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.iconStyling}>
            <Ionicons
              style={styles.icon}
              name={"heart"}
              size={28}
              color="#000"
            />
          </View>
          <Text style={styles.buttonTextStyle}>{"Heart"}</Text>
        </TouchableOpacity>
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
    justifyContent: "space-between",
    backgroundColor: "#002633",
  },
  mainContent: { height: "95%" },
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
  iconStyling: {
    flexDirection: "row-reverse",
    width: 80,
    justifyContent: "center",
  },
  icon: {
    paddingTop: 10,
    paddingLeft: 20,
    alignItems: "center",
    color: "white",
    justifyContent: "center",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
