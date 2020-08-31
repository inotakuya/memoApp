import React, { useEffect, useState } from "react"

import { StyleSheet, Text, View } from "react-native"
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313c",
    justifyContent: "center",
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  editButton: {
    top: 75,
  },
  memoBody: {
    lineHeight: 20,
    fontSize: 15,
  },
})

const MemoDetailScreen = ({ navigation }) => {
  const [memo, setMemo] = useState("")
  useEffect(() => {
    const { params } = navigation.state
    setMemo(params.memo)
  }, [memo])

  const dateString = date => {
    const str = date.toDate().toISOString()
    return str.split("T")[0]
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{memo.body && memo.body.substring(0, 10)}</Text>
            <Text style={styles.memoHeaderDate}>
              {memo.createdOn && dateString(memo.createdOn)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.memoContent}>
        <Text style={styles.memoBody}>{memo.body}</Text>
      </View>

      <CircleButton
        name="pencil"
        color="white"
        style={styles.editButton}
        onPress={() => navigation.navigate("MemoEdit")}
      />
    </View>
  )
}

export default MemoDetailScreen
