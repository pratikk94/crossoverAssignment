import { StyleSheet, View, Text } from "react-native";

export default function Bookmark() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Bookmark</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
