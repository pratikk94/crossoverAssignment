import { StyleSheet, View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Profile</Text>
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
