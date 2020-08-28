import React from "react"

import { StyleSheet, TextInput, View } from "react-native"
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
})

const MemoEditScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.memoEditInput} multiline value="Hi" />
      <CircleButton name="check" />
    </View>
  )
}

export default MemoEditScreen
