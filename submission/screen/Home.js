import { StyleSheet, View } from "react-native";

export default function Home() {
  return <View style={style.mainHomeContainer}></View>;
}
const style = StyleSheet.create({
  mainHomeContainer: {
    flex: 1,
    backgroundColor: "#012735",
  },
});
