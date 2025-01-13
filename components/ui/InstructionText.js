import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function instructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default instructionText;

const styles = {
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
};
