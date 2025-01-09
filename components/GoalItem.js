import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalListItem}>
      <Pressable
        android_ripple={{ color: "#2a0f51" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalListItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
