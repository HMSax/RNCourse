import { View, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

function goalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Mina kursmål"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Lägg till mål" onPress={addGoalHandler} />
    </View>
  );
}

export default goalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "65%",
    marginRight: 8,
    padding: 8,
  },
});
