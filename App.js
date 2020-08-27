import React from "react"
import { StyleSheet, View } from "react-native"
import MemoListScreen from "./src/screens/MemoListScreen"
import Appbar from "./src/components/Appbar"
import MemoDetailScreen from "./src/screens/MemoDetailScreen"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdf6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 78,
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      {/*<MemoListScreen />*/}
      <MemoDetailScreen />
    </View>
  )
}
