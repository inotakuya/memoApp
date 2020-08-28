import React from "react"
import { StyleSheet, View } from "react-native"
import MemoList from "../components/MemoList"
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fffdf6",
  },
})

const MemoListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MemoList navigation={navigation} />

      <CircleButton name="plus" onPress={() => navigation.navigate("MemoEdit")} />
    </View>
  )
}

export default MemoListScreen
