import React from "react"

import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const styles = StyleSheet.create({
  memoList: {
    width: "100%",
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: "#a2a2a2",
  },
})

const MemoList = ({ navigation }) => {
  return (
    <View style={styles.memoList}>
      <TouchableHighlight onPress={() => navigation.navigate("MemoDetail")}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate("MemoDetail")}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate("MemoDetail")}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default MemoList
