import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

async function getForYouData() {
  try {
    const response = await axios.get(
      "https://cross-platform.rp.devfactory.com/for_you"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function ForYou(props) {
  const [ForYou, setForYou] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getForYouData();
      setForYou(data);
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
      <Text style={style.mainText}>{ForYou["question"]}</Text>
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
