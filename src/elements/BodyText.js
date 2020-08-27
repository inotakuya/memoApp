import React from "react"

import { Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  text: {
    color: "#ddd",
    backgroundColor: "#eee",
  },
})

const BodyText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default BodyText
