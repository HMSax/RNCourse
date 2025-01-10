import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}></View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});
