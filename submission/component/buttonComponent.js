import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ButtonComponent(props) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.iconStyling}>
        <Ionicons
          style={styles.icon}
          name={props.iconName}
          size={28}
          color="#000"
        />
      </View>
      <Text style={styles.buttonTextStyle}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconStyling: {
    flexDirection: "row-reverse",
    width: 100,
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
    fontSize: 20,
    textAlign: "center",
  },
});
