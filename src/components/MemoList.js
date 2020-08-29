import React from "react"

import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native"

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

const MemoList = ({ navigation, memoList }) => {
  const renderMemo = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate("MemoDetail")}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>2017/10/10</Text>
        </View>
      </TouchableHighlight>
    )
  }
  return (
    <View style={styles.memoList}>
      <FlatList data={memoList} renderItem={renderMemo} keyExtractor={item => item.key} />
    </View>
  )
}

export default MemoList
