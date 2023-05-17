import { StyleSheet, View, Text } from "react-native";

export default function LeaderBoard() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>LeaderBoard</Text>
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
  },
});
