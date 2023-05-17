import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MCQsOptions(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
      <Text style={style.option}>{props.text}</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  option: {
    fontSize: 24,
    color: "white",
    backgroundColor: "#335D6D",
    padding: 20,
    width: 360,
    marginVertical: 20,
    marginHorizontal: 40,
  },
});
