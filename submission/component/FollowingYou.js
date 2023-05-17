import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

async function getFollowingYouData() {
  try {
    const response = await axios.get(
      "https://cross-platform.rp.devfactory.com/following"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function FollowingYou(props) {
  const [followingYou, setFollowingYou] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getFollowingYouData();
      setFollowingYou(data);
    }
    getData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#002633",
      }}
    >
      {props.isFlip ? (
        <Text style={style.mainText}>{followingYou["flashcard_front"]}</Text>
      ) : (
        <View>
          <Text style={style.mainBackText}>
            {followingYou["flashcard_front"]}
          </Text>

          <Text style={style.mainBackText}>
            {followingYou["flashcard_back"]}
          </Text>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  mainText: {
    fontSize: 30,
    flexDirection: "column",
    color: "white",
    marginHorizontal: 60,
    paddingRight: 10,
    paddingLeft: 10,
  },
  mainBackText: {
    fontSize: 24,
    flexDirection: "column",
    color: "white",
    marginHorizontal: 60,
    paddingRight: 20,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
